(function dsbuilder(attr) {
    var urlBuilder = "jdbc:firebolt://" + attr[connectionHelper.attributeServer] +  "/" + attr[connectionHelper.attributeDatabase] + "?";
    var engine = attr[connectionHelper.attributeVendor1];
    if(engine!=null) urlBuilder+="engine=" + attr[connectionHelper.attributeVendor1];
    return [urlBuilder];
})
