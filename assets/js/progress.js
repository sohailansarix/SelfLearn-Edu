// Progress Tracking with localStorage
const PROGRESS_KEY = 'learning-progress';

function getProgress() {
  try {
    return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || { completed: [], lastAccessed: new Date() };
  } catch {
    return { completed: [], lastAccessed: new Date() };
  }
}

function saveProgress(data) {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(data));
}

function markLessonCompleted(id) {
  const data = getProgress();
  if (!data.completed.includes(id)) {
    data.completed.push(id);
    data.lastAccessed = new Date();
    saveProgress(data);
  }
}

function getProgressPercentage(totalLessons) {
  if (totalLessons === 0) return 0;
  const { completed } = getProgress();
  return Math.round((completed.length / totalLessons) * 100);
}

function updateProgressBar(containerId, totalLessons) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  const percentage = getProgressPercentage(totalLessons);
  const { completed } = getProgress();
  
  const bar = container.querySelector('.progress-fill');
  const text = container.querySelector('.progress-text');
  
  if (bar) bar.style.width = percentage + '%';
  if (text) text.textContent = `Progress: ${completed.length}/${totalLessons} lessons (${percentage}%)`;
}
