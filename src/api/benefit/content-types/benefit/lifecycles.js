module.exports = {
  beforeCreate(event) {
    const { data, where, select, populate } = event.params;
	if(data.content_type) {
		var arr_cat = JSON.parse(JSON.stringify(data.content_type));
		var arr_cat_agency = [];
		if(arr_cat.length>0) {
			arr_cat.forEach(cat => {
				arr_cat_agency.push(cat.value);
			});
			//console.log(arr_cat_agency);
		}
		event.params.data.content_types = arr_cat_agency;
	}
  },

  afterCreate(event) {
    const { result, params } = event;

    // do something to the result;
  },
  
  beforeUpdate(event) {
    const { data, where, select, populate } = event.params;
	if(data.content_type) {
		var arr_cat = JSON.parse(JSON.stringify(data.content_type));
		var arr_cat_agency = [];
		if(arr_cat.length>0) {
			arr_cat.forEach(cat => {
				arr_cat_agency.push(cat.value);
			});
			//console.log(arr_cat_agency);
		}
		event.params.data.content_types = arr_cat_agency;
	}
  },
};