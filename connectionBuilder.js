(function dsbuilder(attr) {
    var urlBuilder = "jdbc:firebolt://" + attr[connectionHelper.attributeServer] +  "/?";
    return [urlBuilder];
})
