(function propertiesbuilder(attr) {
    var props = {};
    props["user"] = attr[connectionHelper.attributeUsername];
    props["password"] = attr[connectionHelper.attributePassword];
    props["engine"] = attr[connectionHelper.attributeVendor1];
    if (attr[connectionHelper.attributeVendor2]) {
        // Firebolt account is always lower case
        props["account"] = attr[connectionHelper.attributeVendor2].toLowerCase();
    }

    return props;
})
