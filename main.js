    //<![CDATA[
    // Recent Comments by Lê Anh Đức
    function idbcomments(a) {
        var e;
        e = '<ul class="idbcomments">';
        for (var t = 0; numComments > t; t++) {
            var r, o, n, i;
            if (t == a.feed.entry.length) break;
            e += "<li>";
            for (var d = a.feed.entry[t], s = 0; s < d.link.length; s++) "alternate" == d.link[s].rel && (r = d.link[s].href);
            for (var l = 0; l < d.author.length; l++) o = d.author[l].name.$t, n = d.author[l].gd$image.src;
            n = -1 != n.indexOf("/s1600/") ? n.replace("/s1600/", "/s" + avatarSize + "-c/") : -1 != n.indexOf("/s220/") ? n.replace("/s220/", "/s" + avatarSize + "-c/") : -1 != n.indexOf("/s512-c/") && 0 != n.indexOf("http:") ? "http:" + n.replace("/s512-c/", "/s" + avatarSize + "-c/") : -1 != n.indexOf("blogblog.com/img/b16-rounded.gif") ? "http://1.bp.blogspot.com/-7bkcAKdpGXI/UrbyQRqvSKI/AAAAAAAAFmI/oBv_yMeYnMQ/s" + avatarSize + "/blogger.png" : -1 != n.indexOf("blogblog.com/img/openid16-rounded.gif") ? "http://2.bp.blogspot.com/-VgnInuIUKBU/UrbzyXTYWRI/AAAAAAAAFmU/3f_Vfj3TI6A/s" + avatarSize + "/openid.png" : -1 != n.indexOf("blogblog.com/img/blank.gif") ? -1 != defaultAvatar.indexOf("gravatar.com") ? defaultAvatar + "&s=" + avatarSize : defaultAvatar : n, 1 == showAvatar && (i = 1 == roundAvatar ? "avatarRound" : "", e += '<div class="avatarImage ' + i + '"><img class="' + i + '" src="' + n + '" alt="' + o + '" width="' + avatarSize + '" height="' + avatarSize + '"/></div>'), e += '<a href="' + r + '">' + o + "</a>";
            var A = d.content.$t,
                v = A.replace(/(<([^>]+)>)/gi, "");
            "" != v && v.length > characters ? (v = v.substring(0, characters), v += "&hellip;", 1 == showMorelink && (v += '<a href="' + r + '">' + moreLinktext + "</a>")) : v = v, e += "<span>" + v + "</span>", e += "</li>"
        }
        e += "</ul>";
        var c = "";
        0 == hideCredits && (c = "display:block;"), e += "", document.write(e)
    }
    var numComments = 50,
        showAvatar = !0,
        avatarSize = 42,
        roundAvatar = !0,
        characters = 40,
        showMorelink = !1,
        defaultAvatar = "http://1.bp.blogspot.com/-m2JqA8HH-JY/V1Y9Z1SpzpI/AAAAAAAAEEY/jnJ-r_-Ta0UadbOE84Egdea5jfcwPSSvwCLcB/s1600/noimage.png",
        hideCredits = !0,
        numComments = numComments || 5,
        avatarSize = avatarSize || 60,
        characters = characters || 40,
        defaultAvatar = defaultAvatar || "http://1.bp.blogspot.com/-m2JqA8HH-JY/V1Y9Z1SpzpI/AAAAAAAAEEY/jnJ-r_-Ta0UadbOE84Egdea5jfcwPSSvwCLcB/s1600/noimage.png",
        moreLinktext = moreLinktext || " More &raquo;",
        showAvatar = "undefined" == typeof showAvatar ? !0 : showAvatar,
        showMorelink = "undefined" == typeof showMorelink ? !1 : showMorelink,
        roundAvatar = "undefined" == typeof roundAvatar ? !0 : roundAvatar,
        hideCredits = "undefined" == typeof hideCredits ? !1 : roundAvatar;
    //]]>