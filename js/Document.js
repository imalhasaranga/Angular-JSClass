angularpro.factory("DocumentFactory",function(Document,Page,pagePosition,field,kind,screenPos){

    var fields = [];
    fields.push(new field(new kind("CHECKBOX","checkbox","something"),"0.0",true,new screenPos(148,308,25,25)));
    fields.push(new field(new kind("CHECKBOX","checkbox","something"),"0.0",true,new screenPos(148,308,25,25)));

    var page = new Page(0,"somepageurl",true,fields,new pagePosition(148,308,25,25));

    var pages = [];
    pages.push(page);
    var doucment  = new Document(pages);
    doucment.setDocID("abcccc");
    return doucment;
});


angularpro.factory("Document",function(){
    var Document = function(pages){
        this._id;
        this._v;
        this._tc;
        this._tu;
        this._f;
        this._orgId;
        this._ownerId;
        this.shortId;
        this.name;
        this.filename;
        this.pages = pages;   //object array
        this.pageCount;
        this.permissions; //string array
        this.ownerName;
        this.self_url;
        this.fields_url;
        this.state;
        this.allRecipients;
        this.hasSequence;
        this.cloneId
    }

    Document.prototype.setDocID = function(_id){
        this._id = _id;
    }
    Document.prototype.getDocID = function(_id){
        return this._id;
    }

    return Document;
});


angularpro.factory("Page",function(){
    var page  = function(pageNumber,pageImage_url,needsInput,fields,pagePosition){
        this.pageNumber = pageNumber;
        this.pageImage_url = pageImage_url;
        this.needsInput = needsInput;
        this.fields = fields;
        this.pagePosition =pagePosition;
    }
    page.prototype.setPageNumber = function(pagenumber){
        this.pageNumber = pagenumber;
    }
    page.prototype.getPageNumber = function(){
        return this.pageNumber;
    }
    page.prototype.setPageImage_url = function(pageImage_url){
        this.pageNumber = pageImage_url;
    }
    page.prototype.getPageImage_url = function(){
        return this.pageImage_url;
    }
    page.prototype.setNeedsInput = function(needsInput){
        this.needsInput = needsInput;
    }
    page.prototype.getNeedsInput = function(){
        return this.needsInput;
    }
    page.prototype.setFields = function(fields){
        this.fields = fields;
    }
    page.prototype.getFields = function(){
        return this.fields;
    }
    page.prototype.setPagePosition = function(pagePosition){
        this.pagePosition = pagePosition;
    }
    page.prototype.getPagePosition = function(){
        return this.pagePosition;
    }
    return page;
});


angularpro.factory("pagePosition",function(){
    var pagePosition  = function(top,left,width,height){
        this.top = top;
        this.left = left;
        this.width = width;
        this.height = height;
    }

    pagePosition.prototype.getTop = function(){
        return this.top;
    }

    pagePosition.prototype.getLeft = function(){
        return this.left;
    }
    pagePosition.prototype.getWidth = function(){
        return this.width;
    }
    pagePosition.prototype.getHeight = function(){
        return this.height;
    }
    return pagePosition;
});



angularpro.factory("field",function(){
    var field = function(kind,fieldPosition,required,screenPos){
        this.kind = kind;
        this.fieldPosition = fieldPosition;
        this.required = required;
        this.screenPos = screenPos;
        this.text = false;
        this.video = false;
        this.image = false;
    }

    field.prototype.getKind = function(){
        return this.kind;
    }
    field.prototype.getFieldPosition = function(){
        return this.fieldPosition;
    }
    field.prototype.isRequired = function(){
        return this.required;
    }
    field.prototype.getScreenPos = function(){
        return this.screenPos;
    }
    return field;
});


angularpro.factory("kind",function(){
    var kind  = function(type,name,fieldImage_url){
        this.type = type;
        this.name = name;
        this.fieldImage_url = fieldImage_url;
    }

    kind.prototype.getType = function(){
        return this.type;
    }

    kind.prototype.getName = function(){
        return this.name;
    }
    kind.prototype.getFieldImage_url = function(){
        return this.fieldImage_url;
    }

    return kind;
});


angularpro.factory("screenPos",function(pagePosition){
    var screenPos  = function(top,left,width,height){
        pagePosition.apply(this,arguments);
        this.top = top;
        this.left = left;
        this.width = width;
        this.height = height;
    }
    screenPos.prototype = pagePosition.prototype;
    screenPos.prototype.constructor = screenPos;

    return screenPos;
});
