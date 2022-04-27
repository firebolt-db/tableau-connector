(function dsbuilder(attr) {
    var urlBuilder = "jdbc:firebolt://" + attr[connectionHelper.attributeServer] +  "/" + attr[connectionHelper.attributeDatabase] + "?";
    return [urlBuilder];
})
