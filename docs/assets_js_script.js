// Script for loading CSV, building charts and filling table
// Use raw.githubusercontent.com URL to load the CSV directly from main branch
const CSV_PATH = "https://raw.githubusercontent.com/Mohamedmxz/MIT-ELO2-/main/4_data_analysis/model_datasets/final_forecasts_to_2030.csv";

const dateKeyCandidates = ['date','DATE','Date'];
const regionKeyCandidates = ['region','REGION','Region'];
const rainfallKeyCandidates = ['predicted_rainfall','Predicted_Rainfall','Predicted_Rainfall'];
const temperatureKeyCandidates = ['predicted_temperature','Predicted_Temperature','Predicted_Temperature'];

let rainfallChart = null;
let temperatureChart = null;
let rawRows = [];

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('refresh-btn').addEventListener('click', loadData);
  document.getElementById('search-input').addEventListener('input', applyFilter);
  document.querySelectorAll('.predictions-table th.sortable').forEach(th => {
    th.addEventListener('click', () => sortTableBy(th.dataset.key));
  });

  createEmptyCharts();
  loadData();
});

function createEmptyCharts(){
  const rCtx = document.getElementById('rainfallChart').getContext('2d');
  const tCtx = document.getElementById('temperatureChart').getContext('2d');

  rainfallChart = new Chart(rCtx, {
    type: 'line',
    data: { labels: [], datasets: [{ label: 'Predicted Rainfall (mm)', data: [], borderColor: '#b44b2a', backgroundColor: 'rgba(180,75,42,0.08)', tension:0.4, pointRadius:2 }] },
    options: {
      responsive:true,
      plugins:{ legend:{ display:true }, tooltip:{ mode:'index', intersect:false } },
      scales:{ x:{ display:true }, y:{ display:true, title:{display:true, text:'mm'} } }
    }
  });

  temperatureChart = new Chart(tCtx, {
    type: 'line',
    data: { labels: [], datasets: [{ label: 'Predicted Temperature (°C)', data: [], borderColor: '#2f6f44', backgroundColor: 'rgba(47,111,68,0.06)', tension:0.4, pointRadius:2 }] },
    options: {
      responsive:true,
      plugins:{ legend:{ display:true }, tooltip:{ mode:'index', intersect:false } },
      scales:{ x:{ display:true }, y:{ display:true, title:{display:true, text:'°C'} } }
    }
  });
}

async function loadData(){
  try {
    setLoading(true);
    const res = await fetch(CSV_PATH, {cache: "no-store"});
    if(!res.ok) throw new Error(`Failed to fetch CSV (${res.status})`);
    const txt = await res.text();
    parseCSV(txt);
    renderTable(rawRows);
    buildAggregatedCharts(rawRows);
  } catch(err){
    console.error(err);
    alert('Could not load predictions CSV. Check path and CORS. Path: ' + CSV_PATH);
  } finally {
    setLoading(false);
  }
}

function setLoading(isLoading){
  const btn = document.getElementById('refresh-btn');
  if(btn){ btn.disabled = isLoading; btn.textContent = isLoading ? 'Loading...' : 'Refresh Data'; }
}

function parseCSV(text){
  const lines = text.trim().split(/\r?\n/).filter(Boolean);
  if(lines.length === 0) { rawRows = []; return; }
  const headers = lines[0].split(',').map(h => h.trim());
  const mapHeaderIndex = (candidates) => {
    for(const cand of candidates){
      const idx = headers.findIndex(h => h.toLowerCase() === cand.toLowerCase());
      if(idx >= 0) return idx;
    }
    return -1;
  };

  const idxDate = mapHeaderIndex(dateKeyCandidates);
  const idxRegion = mapHeaderIndex(regionKeyCandidates);
  const idxRain = mapHeaderIndex(rainfallKeyCandidates);
  const idxTemp = mapHeaderIndex(temperatureKeyCandidates);

  if(idxDate < 0 || idxRain < 0 || idxTemp < 0){
    throw new Error('CSV missing expected columns.');
  }

  const rows = [];
  for(let i=1;i<lines.length;i++){
    const cols = lines[i].split(',').map(c => c.trim());
    const row = {
      date: cols[idxDate] || '',
      region: idxRegion >=0 ? (cols[idxRegion] || '') : '',
      predicted_rainfall: parseFloat(cols[idxRain]) || 0,
      predicted_temperature: parseFloat(cols[idxTemp]) || 0
    };
    rows.push(row);
  }
  rawRows = rows;
}

function buildAggregatedCharts(rows){
  const map = new Map();
  for(const r of rows){
    const key = r.date;
    if(!map.has(key)) map.set(key, {count:0, rainfall:0, temp:0});
    const v = map.get(key);
    v.count++;
    v.rainfall += Number(r.predicted_rainfall) || 0;
    v.temp += Number(r.predicted_temperature) || 0;
  }

  const aggregated = Array.from(map.entries()).map(([date, v]) => ({
    date,
    rainfall: v.rainfall / v.count,
    temp: v.temp / v.count
  })).sort((a,b) => new Date(a.date) - new Date(b.date));

  const labels = aggregated.map(d => d.date);
  rainfallChart.data.labels = labels;
  rainfallChart.data.datasets[0].data = aggregated.map(d => Number(d.rainfall.toFixed(6)));
  rainfallChart.update();

  temperatureChart.data.labels = labels;
  temperatureChart.data.datasets[0].data = aggregated.map(d => Number(d.temp.toFixed(4)));
  temperatureChart.update();
}

function renderTable(rows){
  const tbody = document.getElementById('predictions-body');
  if(!tbody) return;
  tbody.innerHTML = '';
  for(const r of rows){
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${escapeHtml(r.date)}</td>
      <td>${escapeHtml(r.region)}</td>
      <td>${Number(r.predicted_rainfall)}</td>
      <td>${Number(r.predicted_temperature)}</td>
    `;
    tbody.appendChild(tr);
  }
  applyFilter();
}

function applyFilter(){
  const input = document.getElementById('search-input');
  if(!input) return;
  const q = input.value.trim().toLowerCase();
  const tbody = document.getElementById('predictions-body');
  if(!tbody) return;
  Array.from(tbody.rows).forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = q === '' || text.includes(q) ? '' : 'none';
  });
}

let currentSort = { key: null, asc: true };
function sortTableBy(key){
  currentSort.asc = (currentSort.key === key) ? !currentSort.asc : true;
  currentSort.key = key;

  rawRows.sort((a,b) => {
    if(key === 'date'){
      const da = new Date(a.date), db = new Date(b.date);
      return currentSort.asc ? da - db : db - da;
    }
    if(typeof a[key] === 'number' || typeof b[key] === 'number'){
      return currentSort.asc ? a[key] - b[key] : b[key] - a[key];
    }
    const av = (a[key] || '').toString().localeCompare((b[key] || '').toString(), undefined, {numeric:true});
    return currentSort.asc ? av : -av;
  });

  renderTable(rawRows);
}

function escapeHtml(s){ return (s+"").replace(/[&<>"'`=\/]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;','/':'&#x2F;','`':'&#96;','=':'&#61;'}[c]; }); }
