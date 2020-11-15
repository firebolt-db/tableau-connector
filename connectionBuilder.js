(function dsbuilder(attr) {
    var urlBuilder = "jdbc:firebolt://" + attr[connectionHelper.attributeServer] +  "/" + attr[connectionHelper.attributeVendor1] + "?database=" + attr[connectionHelper.attributeDatabase];

    return [urlBuilder];
})
