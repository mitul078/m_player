// Function to convert time string to seconds (handles both decimal and colon formats)
function timeToSeconds(timeStr) {
    // Handle empty or invalid input
    if (!timeStr) return 0;
    
    // Convert decimal format to colon format if needed
    timeStr = timeStr.toString().replace('.', ':');
    
    // Split and parse the time components
    const parts = timeStr.split(':');
    if (parts.length !== 2) return 0;
    
    const minutes = parseInt(parts[0]) || 0;
    const seconds = parseInt(parts[1]) || 0;
    
    return (minutes * 60) + seconds;
}

// Calculate total duration with error handling
let totalDurationInSeconds = playlist.reduce((total, song) => {
    const duration = timeToSeconds(song.musicDuration);
    return total + (isNaN(duration) ? 0 : duration);
}, 0);

// Update total time display with validation
let totalTime = document.querySelector('.total-duration');
if (totalDurationInSeconds > 0) {
    totalTime.innerHTML = secondsToTime(totalDurationInSeconds);
} else {
    totalTime.innerHTML = '0:00';
}
totalTime.style.opacity = '.7';
totalTime.style.fontSize = '.9rem'; 