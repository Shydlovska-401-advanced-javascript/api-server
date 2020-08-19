 class DbCategories{
    constructor(requestObj, requestTime){
        this.id = requestObj.id;
        this.name = requestObj.name;
        this.display_name = requestObj.display_name || requestObj.name;
        this.description = requestObj.description || "palceholer";
        this.requestTime = requestTime;

    }
}

class DbProduct{
    constructor(requestObj, requestTime){
        this.id = requestObj.id;
        this.category = requestObj.category || "palceholer";
        this.name = requestObj.name;
        this.display_name =requestObj.display_name || requestObj.name;
        this.description = requestObj.description ;
        this.requestTime = requestTime;

    }
}

module.exports = {
    DbCategories : DbCategories,
    DbProduct: DbProduct
  }