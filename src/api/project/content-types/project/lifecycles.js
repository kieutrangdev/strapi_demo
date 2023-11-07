module.exports = {
  beforeCreate(event) {
    const { data, where, select, populate } = event.params;
	if(data.map_agency_cat) {
		var arr_cat = JSON.parse(JSON.stringify(data.map_agency_cat));
		var arr_cat_agency = [];
		if(arr_cat.length>0) {
			arr_cat.forEach(cat => {
				arr_cat_agency.push(cat.value);
			});
			//console.log(arr_cat_agency);
		}
		event.params.data.agency_categories = arr_cat_agency;
	}
  },

  afterCreate(event) {
    const { result, params } = event;

    // do something to the result;
  },
  
  beforeUpdate(event) {
    const { data, where, select, populate } = event.params;
	//console.log(data.map_agency_cat);
	if(data.map_agency_cat) {
		var arr_cat = JSON.parse(JSON.stringify(data.map_agency_cat));
		var arr_cat_agency = [];
		if(arr_cat.length>0) {
			arr_cat.forEach(cat => {
				arr_cat_agency.push(cat.value);
			});
			//console.log(arr_cat_agency);
		}
		event.params.data.agency_categories = arr_cat_agency;
	}
  },
};