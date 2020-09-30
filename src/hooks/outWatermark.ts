const outWatermark = {
	out: (id: any) => {
		if (document.getElementById(id) !== null) {
			document.body.removeChild(document.getElementById(id) as any);
			const div = document.createElement("div");
			div.style.display = 'none'
		}
	}
}
export default outWatermark 