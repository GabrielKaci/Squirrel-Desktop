module.exports = class KeysRepository {

	constructor(dataSource) {
		this._dataSource = dataSource;
	}

	save(file, data, password) {
		this._dataSource.save(file, data, password);
	}

	load(file, password) {
		return this._dataSource.load(file, password);
	}
};
