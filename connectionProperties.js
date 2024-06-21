(function propertiesbuilder(attr) {
    var props = {};

    props["user"] = attr[connectionHelper.attributeUsername];
    props["password"] = attr[connectionHelper.attributePassword];
    props["engine"] = attr["v-engine-name"];
    props["database"] = attr[connectionHelper.attributeDatabase];
    // Firebolt account is always lower case
    props["account"] = attr["v-account-name"].toLowerCase();

    return props;
})
