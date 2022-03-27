
class DataControler {
	constructor() {
		this.apiOrigin = process.env.NODE_ENV === 'production' ? "/" : "http://localhost:5000/";
	}
}

export { DataControler };