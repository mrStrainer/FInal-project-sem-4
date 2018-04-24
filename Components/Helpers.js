export function formatDuration(duration_ms) {
	const mins = Math.floor(duration_ms / 60000);
	const seconds = ((duration_ms % 60000) / 1000).toFixed(0);
	
	return `${mins}: ${(seconds < 10 ? '0' : '') + seconds}`;
}

export function timeLeft(expires) {
	const ex = new Date(parseInt(expires));
  	const date = new Date();
  	const left = ex.getTime() - date.getTime();
  	if (left <= 0) {
  		return null;
	} 
	return left;
}