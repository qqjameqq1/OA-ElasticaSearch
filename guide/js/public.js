/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 OA Wu Design
 */

// var ENVIRONMENT = 'dev';
var ENVIRONMENT = 'production';

if (ENVIRONMENT == 'dev') {
  window.url = 'https://dev.works.ioa.tw/OA-ElasticaSearch/guide/';
} else {
  window.url = 'https://works.ioa.tw/OA-ElasticaSearch/guide/';

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-46121102-26', 'auto');
  ga('send', 'pageview');
}

function browser_console_qrcode (color1, color2, qrCodeArray) {var css1 = "color:" + color1 + ";font-size:10px;margin:3px;text-shadow: 0 -6px " + color1 + ", 6px 0 " + color1 + ", 6px -6px " + color1 + ";",css2 = "color:" + color2 + ";font-size:10px;margin:3px;text-shadow: 0 -6px " + color2 + ", 6px 0 " + color2 + ", 6px -6px " + color2 + ";",qrt = '\\n';for (var i = 0, c = []; i < qrCodeArray.length; i++, qrt += '\\n')for (var j = 0; j < qrCodeArray[i].length; c.push ('"' + (qrCodeArray[i][j] ? css1 : css2) + '"'), j++)qrt += qrCodeArray[i][j] ? "%c▇" : "%c▇";qrt += '\\n';eval ('console.log("' + qrt + '", ' + c.join (',') + ');');console.log ('%c想看更多 OA Wu 的作品集嗎！？快看這裡喲！ %c➜ %chttp://www.ioa.tw/?f=works', 'color:rgba(36, 127, 84, 1.00);font-size:15px;line-height:25px;', 'color:rgba(213, 36, 35, 1.00);font-size:15px;line-height:25px;', 'color:rgba(66, 133, 244, 1.00);font-size:10px;line-height:25px;');}
browser_console_qrcode ('rgba(39, 40, 34, 1.00)', 'rgba(255, 255, 255, 1.00)', [[1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],[1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],[1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1],[1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1],[1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],[1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],[1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],[1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1],[0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0],[1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1],[0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1],[0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1],[0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0],[0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1],[0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1],[0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0],[0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],[1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1],[1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0],[1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],[1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1],[1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1],[1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1],[1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1]]);

Array.prototype.column = function (k) {
  return this.map (function (t) { return k ? eval ("t." + k) : t; });
};
Array.prototype.diff = function (a, k) {
  return this.filter (function (i) { return a.column (k).indexOf (eval ("i." + k)) < 0; });
};
Array.prototype.max = function (k) {
  return Math.max.apply (null, this.column (k));
};
Array.prototype.min = function (k) {
  return Math.min.apply (null, this.column (k));
};
$(function () {
  window.body = $('body');
  window.mainLoading = $loading = $('<div />').attr ('id', 'loading').append ('<svg class="svg" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"><circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle></svg>').appendTo (window.body);

  window.hideLoading = function (callback) {
    this.mainLoading.addClass ('hide').fadeOut (function () {
      $(this).hide (function () {
        if (callback)
          callback ();
      });
    });
  };

  window.closeLoading = function (callback) {
    window.hideLoading (function  () {
      if (callback)
        callback ();
        window.mainLoading.remove ();
    });
  };

  var logo = "OA's Elastica Search";
  var title = '';
  var now = document.URL.replace (/^.*[\\\/]/, '');
  now = now === '' ? 'index.html' : now;

  var leftMenu = [
    {
      group: '主選單',
      items: [
        {target: '_self', href: 'index.html', text: '首頁簡介', class: 'icon-home', },
        {target: '_self', href: 'struct.html', text: '結構說明', class: 'icon-list2', },
        {target: '_self', href: 'install.html', text: 'Mac 安裝', class: 'icon-tools', },
      ]
    },
    {
      group: 'CRUD',
      items: [
        {target: '_self', href: 'create.html', text: '新增 (Create)', class: 'icon-plus', },
        {target: '_self', href: 'read.html', text: '讀取 (Read)', class: 'icon-file-text2', },
        {target: '_self', href: 'update.html', text: '更新 (Update)', class: 'icon-pencil2', },
        {target: '_self', href: 'delete.html', text: '刪除 (Delete)', class: 'icon-bin', },
      ]
    },
    {
      group: '分享',
      items: [
        {target: '_self', href: 'https://github.com/comdan66/OA-ElasticaSearch/archive/master.zip', text: '原始碼 下載', class: 'icon-in', },
        {target: '_blank', href: 'https://github.com/comdan66/OA-ElasticaSearch', text: 'GitHub 原碼', class: 'icon-code', },
      ]
    },
    {
      group: '作者',
      items: [
        {target: '_blank', href: 'http://www.ioa.tw', text: '作者', class: 'icon-user', },
        {target: '_blank', href: 'https://github.com/comdan66', text: 'GitHub', class: 'icon-github', },
        {target: '_blank', href: 'https://www.facebook.com/comdan66', text: 'Facebook', class: 'icon-facebook-square', },
        {target: '_blank', href: 'http://works.ioa.tw/', text: '更多', class: 'icon-more', },
      ]
    }
  ];

  var optionMenu = [
    {text: '原始碼', href: 'https://github.com/comdan66/OA-ElasticaSearch', target: '_blank', class: ''},
    {text: '更多作品', href: 'http://works.ioa.tw/', target: '_blank', class: ''},
    {text: 'GitHub', href: 'https://github.com/comdan66', target: '_blank', class: ''},
    {text: '作者', href: 'https://www.facebook.com/comdan66', target: '_blank', class: 'top_line'},
  ];

  var footer = '<div>OA-ElasticaSearch © 2015</div><div>如有相關問題歡迎與<a href="https://www.facebook.com/comdan66" target="_blank">作者</a>討論。</div>';


  leftMenu.forEach (function (t) {
    t.items.forEach (function (t) {
      if (/(http(s?))\:\/\//gi.test (t.href)) return;
      if (t.href == now) {
        title = t.text;
        t.class += ' active';
      }
      t.href = window.url + t.href;
    });
  });
  optionMenu.forEach (function (t) {
    if (/(http(s?))\:\/\//gi.test (t.href)) return;
    t.href = window.url + t.href;
  });

  $('title').text (title.length ? title + ' - ' + logo : logo);

  var overflow = window.body.css ('overflow');
  var $container = $('#container');
  var $wrapper = $container.find ('.wrapper');
  var $wrapperCover = $('<div />').addClass ('cover').prependTo ($wrapper).click (function () {
    $container.removeClass ('show');
    window.body.css ('overflow', overflow);
  });
  var $wrapperLeft = $('<div />').addClass ('wrapper_left').prependTo ($wrapper);

  var $leftOption = $('<div />').addClass ('option').addClass ('icon-menu').click (function () {
    if ($container.hasClass ('show')) {
      $container.removeClass ('show');
      window.body.css ('overflow', overflow);
    } else {
      $container.addClass ('show');
      window.body.css ('overflow', 'hidden');
    }
  });

  var $rightOption = $('<div />').addClass ('option').addClass ('icon-more').addClass ('white').append ($('<div />').addClass ('cover')).append ($('<div />').addClass ('menu').addClass ('i' + optionMenu.length).append (optionMenu.map (function (t) {
    return $('<a />').attr ('href', t.href).text (t.text).attr ('target', t.target).addClass (t.class);
  }))).click (function () {
    $(this).toggleClass ('show');
  });

  var $nav = $('<nav />').append ($('<div />').addClass ('container').append ($('<div />').addClass ('logo').text (logo)).append ($('<div />').addClass ('left').append ($leftOption).append ($('<div />').addClass ('title').text (title))).append ($('<div />').addClass ('right').append ($rightOption))).prependTo (window.body);

  $wrapperLeft.append ($('<div />').addClass ('logo').append ($('<div />').text ("OA's")).append ($('<div />').text ("Elastica Search"))).append (leftMenu.map (function (t) {
      return $('<div />').addClass ('title').text (t.group).add ($('<div />').addClass ('group').append (t.items.map (function (t) {
        return $('<a />').text (t.text).attr ('target', t.target).addClass (t.class).attr ('href', t.href);
      })));
    }));

  var $action = $('<a />').attr ('id', 'action').addClass ('icon-github').attr ('href', 'https://github.com/comdan66/OA-ElasticaSearch').attr ('target', '_blank').appendTo (window.body);
  var $footer = $('<div />').attr ('id', 'footer').append ($('<div />').addClass ('l')).append ($('<div />').addClass ('c').html (footer)).append ($('<div />').addClass ('r')).appendTo (window.body);


  $('.tabs > * > *').click (function () {
    $(this).addClass ('active').siblings ().removeClass ('active');
    $(this).parent ().next ().children ().eq ($(this).index ()).addClass ('active').siblings ().removeClass ('active');
  });

  $('.tabs > * > *:first-child').click ();

  $('.prettyprint').addClass ('linenums');
  // prettyPrint ();

  // $('.prettyprint ol').each (function () {
  //   var $li = $(this).find ('li');

  //   var min = $li.map (function () {
  //     var l = ($(this).children ().first ().html ().match (/\s/g) || []).length;

  //     return ($(this).children ().length > 1) ? l : null;
  //   }).filter (function (t) {
  //     return this;
  //   }).toArray ();

  //   if (min)
  //     min = min.min ();

  //   $li.each (function () {
  //     var $first = $(this).children ().first ();
  //     $first.html ($first.html ().replace(new RegExp("\\s{" + min + "}"), ''));
  //   });
  // });

  var hash = window.location.hash.trim ().slice (1);
  if (hash && $('.' + hash).length)
    window.body.stop ().animate ({ scrollTop: $('.' + hash).offset ().top - 60 }, 500);

  window.onhashchange = function () {
    hash = window.location.hash.trim ().slice (1);
    window.body.stop ().animate ({ scrollTop: $('.' + hash).offset ().top - 60 }, 500);
  };

  window.closeLoading ();
});