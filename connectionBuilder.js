(function dsbuilder(attr) {
    var urlBuilder = "jdbc:firebolt://" + attr[connectionHelper.attributeServer] +  "/" + attr[connectionHelper.attributeDatabase] + "?";
    var engine = attr[connectionHelper.attributeVendor1];
    var params = attr[connectionHelper.attributeVendor2];
    if(engine!="") urlBuilder+="engine=" + attr[connectionHelper.attributeVendor1]+"&";
    params = params.split(' ').join('');
    params = params.split(',').join('&');
    urlBuilder += params;
    return [urlBuilder];
})
