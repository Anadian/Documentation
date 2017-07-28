<!DOCTYPE html>
<html lang="en" dir="ltr" class="client-nojs">
<head>
<title>MediaWiki:Gadget-mathjax.js - cppreference.com</title>
<meta charset="UTF-8" />
<meta name="generator" content="MediaWiki 1.21.2" />
<link rel="shortcut icon" href="http://en.cppreference.com/favicon.ico" />
<link rel="search" type="application/opensearchdescription+xml" href="http://en.cppreference.com/mwiki/opensearch_desc.php" title="cppreference.com (en)" />
<link rel="EditURI" type="application/rsd+xml" href="http://en.cppreference.com/mwiki/api.php?action=rsd" />
<link rel="alternate" type="application/atom+xml" title="cppreference.com Atom feed" href="http://en.cppreference.com/mwiki/index.php?title=Special:RecentChanges&amp;feed=atom" />
<link rel="stylesheet" href="http://en.cppreference.com/mwiki/load.php?debug=false&amp;lang=en&amp;modules=ext.gadget.ColiruCompiler%7Cext.rtlcite%7Cmediawiki.legacy.commonPrint%2Cshared%7Cskins.cppreference2&amp;only=styles&amp;skin=cppreference2&amp;*" />
<meta name="ResourceLoaderDynamicStyles" content="" />
<link rel="stylesheet" href="http://en.cppreference.com/mwiki/load.php?debug=false&amp;lang=en&amp;modules=site&amp;only=styles&amp;skin=cppreference2&amp;*" />
<style>a:lang(ar),a:lang(ckb),a:lang(fa),a:lang(kk-arab),a:lang(mzn),a:lang(ps),a:lang(ur){text-decoration:none}#toc{display:none}.editsection{display:none}
/* cache key: mwiki1-mwiki_en_:resourceloader:filter:minify-css:7:472787eddcf4605d11de8c7ef047234f */</style>

<script src="http://en.cppreference.com/mwiki/load.php?debug=false&amp;lang=en&amp;modules=startup&amp;only=scripts&amp;skin=cppreference2&amp;*"></script>
<script>if(window.mw){
mw.config.set({"wgCanonicalNamespace":"MediaWiki","wgCanonicalSpecialPageName":false,"wgNamespaceNumber":8,"wgPageName":"MediaWiki:Gadget-mathjax.js","wgTitle":"Gadget-mathjax.js","wgCurRevisionId":94058,"wgArticleId":16356,"wgIsArticle":true,"wgAction":"view","wgUserName":null,"wgUserGroups":["*"],"wgCategories":[],"wgBreakFrames":false,"wgPageContentLanguage":"en","wgSeparatorTransformTable":["",""],"wgDigitTransformTable":["",""],"wgDefaultDateFormat":"dmy","wgMonthNames":["","January","February","March","April","May","June","July","August","September","October","November","December"],"wgMonthNamesShort":["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"wgRelevantPageName":"MediaWiki:Gadget-mathjax.js","wgRestrictionEdit":[],"wgRestrictionMove":[]});
}</script><script>if(window.mw){
mw.loader.implement("user.options",function(){mw.user.options.set({"ccmeonemails":0,"cols":80,"date":"default","diffonly":0,"disablemail":0,"disablesuggest":0,"editfont":"default","editondblclick":0,"editsection":0,"editsectiononrightclick":0,"enotifminoredits":0,"enotifrevealaddr":0,"enotifusertalkpages":1,"enotifwatchlistpages":0,"extendwatchlist":0,"externaldiff":0,"externaleditor":0,"fancysig":0,"forceeditsummary":0,"gender":"unknown","hideminor":0,"hidepatrolled":0,"imagesize":2,"justify":0,"math":1,"minordefault":0,"newpageshidepatrolled":0,"nocache":0,"noconvertlink":0,"norollbackdiff":0,"numberheadings":0,"previewonfirst":0,"previewontop":1,"quickbar":5,"rcdays":7,"rclimit":50,"rememberpassword":0,"rows":25,"searchlimit":20,"showhiddencats":0,"showjumplinks":1,"shownumberswatching":1,"showtoc":0,"showtoolbar":1,"skin":"cppreference2","stubthreshold":0,"thumbsize":2,"underline":2,"uselivepreview":0,"usenewrc":0,"watchcreations":0,"watchdefault":0,"watchdeletion":0,
"watchlistdays":3,"watchlisthideanons":0,"watchlisthidebots":0,"watchlisthideliu":0,"watchlisthideminor":0,"watchlisthideown":0,"watchlisthidepatrolled":0,"watchmoves":0,"wllimit":250,"variant":"en","language":"en","searchNs0":true,"searchNs1":false,"searchNs2":false,"searchNs3":false,"searchNs4":false,"searchNs5":false,"searchNs6":false,"searchNs7":false,"searchNs8":false,"searchNs9":false,"searchNs10":false,"searchNs11":false,"searchNs12":false,"searchNs13":false,"searchNs14":false,"searchNs15":false,"gadget-ColiruCompiler":1});;},{},{});mw.loader.implement("user.tokens",function(){mw.user.tokens.set({"editToken":"+\\","patrolToken":false,"watchToken":false});;},{},{});
/* cache key: mwiki1-mwiki_en_:resourceloader:filter:minify-js:7:ca03345b1e2c4d90a25d968753a73b92 */
}</script>
<script>if(window.mw){
mw.loader.load(["mediawiki.page.startup","mediawiki.legacy.wikibits","mediawiki.legacy.ajax"]);
}</script>
<style type="text/css">/*<![CDATA[*/
.source-javascript {line-height: normal;}
.source-javascript li, .source-javascript pre {
	line-height: normal; border: 0px none white;
}
/**
 * GeSHi Dynamically Generated Stylesheet
 * --------------------------------------
 * Dynamically generated stylesheet for javascript
 * CSS class: source-javascript, CSS id: 
 * GeSHi (C) 2004 - 2007 Nigel McNie, 2007 - 2008 Benny Baumann
 * (http://qbnz.com/highlighter/ and http://geshi.org/)
 * --------------------------------------
 */
.javascript.source-javascript .de1, .javascript.source-javascript .de2 {font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;}
.javascript.source-javascript  {font-family:monospace;}
.javascript.source-javascript .imp {font-weight: bold; color: red;}
.javascript.source-javascript li, .javascript.source-javascript .li1 {font-weight: normal; vertical-align:top;}
.javascript.source-javascript .ln {width:1px;text-align:right;margin:0;padding:0 2px;vertical-align:top;}
.javascript.source-javascript .li2 {font-weight: bold; vertical-align:top;}
.javascript.source-javascript .kw1 {color: #000066; font-weight: bold;}
.javascript.source-javascript .kw2 {color: #003366; font-weight: bold;}
.javascript.source-javascript .kw3 {color: #000066;}
.javascript.source-javascript .co1 {color: #006600; font-style: italic;}
.javascript.source-javascript .co2 {color: #009966; font-style: italic;}
.javascript.source-javascript .coMULTI {color: #006600; font-style: italic;}
.javascript.source-javascript .es0 {color: #000099; font-weight: bold;}
.javascript.source-javascript .br0 {color: #009900;}
.javascript.source-javascript .sy0 {color: #339933;}
.javascript.source-javascript .st0 {color: #3366CC;}
.javascript.source-javascript .nu0 {color: #CC0000;}
.javascript.source-javascript .me1 {color: #660066;}
.javascript.source-javascript .ln-xtra, .javascript.source-javascript li.ln-xtra, .javascript.source-javascript div.ln-xtra {background-color: #ffc;}
.javascript.source-javascript span.xtra { display:block; }

/*]]>*/
</style><!--[if lt IE 7]><style type="text/css">body{behavior:url("/mwiki/skins/cppreference2/csshover.min.htc")}</style><![endif]--></head>
<body class="mediawiki ltr sitedir-ltr ns-8 ns-subject page-MediaWiki_Gadget-mathjax_js skin-cppreference2 action-view">
        <!-- header -->
        <div id="mw-head" class="noprint">
            <div id="cpp-head-first-base">
                <div id="cpp-head-first">
                    <h5><a href="http://en.cppreference.com/">
                        cppreference.com                        </a></h5>
                    <div id="cpp-head-search">
                        
<!-- 0 -->
<div id="p-search">
	<h5><label for="searchInput">Search</label></h5>
	<form action="http://en.cppreference.com/mwiki/index.php" id="searchform">
		<input type='hidden' name="title" value="Special:Search"/>
				<div id="simpleSearch">
						<input name="search" title="Search cppreference.com [f]" accesskey="f" id="searchInput" />						<button type="submit" name="button" title="Search the pages for this text" id="searchButton"><img src="http://en.cppreference.com/mwiki/skins/cppreference2/images/search-ltr.png?303" alt="Search" /></button>					</div>
			</form>
</div>

<!-- /0 -->
                    </div>
                    <div id="cpp-head-personal">
                        
<!-- 0 -->
<div id="p-personal" class="">
<span id="pt-createaccount"><a href="http://en.cppreference.com/mwiki/index.php?title=Special:UserLogin&amp;returnto=MediaWiki%3AGadget-mathjax.js&amp;type=signup">Create account</a></span>	<div class="menu">
        <ul>
<li id="pt-login"><a href="http://en.cppreference.com/mwiki/index.php?title=Special:UserLogin&amp;returnto=MediaWiki%3AGadget-mathjax.js" title="You are encouraged to log in; however, it is not mandatory [o]" accesskey="o">Log in</a></li>        </ul>
    </div>
</div>

<!-- /0 -->
                    </div>

                </div>
            </div>
            <div id="cpp-head-second-base">
                <div id="cpp-head-second">
                    <div id="cpp-head-tools-left">
                        
<!-- 0 -->
<div id="p-namespaces" class="vectorTabs">
	<h5>Namespaces</h5>
	<ul>
					<li  id="ca-nstab-mediawiki" class="selected"><span><a href="MediaWiki:Gadget-mathjax.js"  title="View the system message [c]" accesskey="c">Message</a></span></li>
					<li  id="ca-talk" class="new"><span><a href="http://en.cppreference.com/mwiki/index.php?title=MediaWiki_talk:Gadget-mathjax.js&amp;action=edit&amp;redlink=1"  title="Discussion about the content page [t]" accesskey="t">Discussion</a></span></li>
			</ul>
</div>

<!-- /0 -->

<!-- 1 -->
<div id="p-variants" class="vectorMenu emptyPortlet">
		<h5><span>Variants</span><a href="MediaWiki:Gadget-mathjax.js#"></a></h5>
	<div class="menu">
		<ul>
					</ul>
	</div>
</div>

<!-- /1 -->
                    </div>
                    <div id="cpp-head-tools-right">
                        
<!-- 0 -->
<div id="p-views" class="vectorTabs">
	<h5>Views</h5>
	<ul>
					<li id="ca-view" class="selected"><span><a href="MediaWiki:Gadget-mathjax.js" >View</a></span></li>
					<li id="ca-viewsource"><span><a href="http://en.cppreference.com/mwiki/index.php?title=MediaWiki:Gadget-mathjax.js&amp;action=edit"  title="This page is protected.&#10;You can view its source [e]" accesskey="e">View source</a></span></li>
					<li id="ca-history" class="collapsible"><span><a href="http://en.cppreference.com/mwiki/index.php?title=MediaWiki:Gadget-mathjax.js&amp;action=history"  title="Past revisions of this page [h]" accesskey="h">History</a></span></li>
			</ul>
</div>

<!-- /0 -->

<!-- 1 -->
<div id="p-cactions" class="vectorMenu emptyPortlet">
	<h5><span>Actions</span><a href="MediaWiki:Gadget-mathjax.js#"></a></h5>
	<div class="menu">
		<ul>
					</ul>
	</div>
</div>

<!-- /1 -->
                    </div>
                </div>
            </div>
        </div>
        <!-- /header -->
        <!-- content -->
        <div id="cpp-content-base">
            <div id="content">
                <a id="top"></a>
                <div id="mw-js-message" style="display:none;"></div>
                                <!-- firstHeading -->
                <h1 id="firstHeading" class="firstHeading">MediaWiki:Gadget-mathjax.js</h1>
                <!-- /firstHeading -->
                <!-- bodyContent -->
                <div id="bodyContent">
                                        <!-- tagline -->
                    <div id="siteSub">From cppreference.com</div>
                    <!-- /tagline -->
                                        <!-- subtitle -->
                    <div id="contentSub"></div>
                    <!-- /subtitle -->
                                                            <!-- bodycontent -->
                    <div id="mw-content-text" lang="en" dir="ltr" class="mw-content-ltr"><div id="mw-clearyourcache" lang="en" dir="ltr" class="mw-content-ltr">
<p><b>Note:</b> After saving, you may have to bypass your browser's cache to see the changes.
</p>
<ul><li> <b>Firefox / Safari:</b> Hold <i>Shift</i> while clicking <i>Reload</i>, or press either <i>Ctrl-F5</i> or <i>Ctrl-R</i> (<i>⌘-R</i> on a Mac)
</li><li> <b>Google Chrome:</b> Press <i>Ctrl-Shift-R</i> (<i>⌘-Shift-R</i> on a Mac)
</li><li> <b>Internet Explorer:</b> Hold <i>Ctrl</i> while clicking <i>Refresh</i>, or press <i>Ctrl-F5</i>
</li><li> <b>Opera:</b> Clear the cache in <i>Tools → Preferences</i>
</li></ul>
</div>
<div dir="ltr"><pre class="javascript source-javascript"><span class="co1">// adapted from https://ja.wikisource.org/wiki/MediaWiki:Gadget-mathjax.js</span>
<span class="co1">// originally https://gist.github.com/pkra/794a1d9a35ae2428eaff</span>
&nbsp;
<span class="kw2">var</span> mathTags <span class="sy0">=</span> $<span class="br0">&#40;</span><span class="st0">'.mjax'</span><span class="br0">&#41;</span><span class="sy0">;</span>
<span class="kw1">if</span> <span class="br0">&#40;</span>mathTags.<span class="me1">length</span> <span class="sy0">&gt;</span> <span class="nu0">0</span><span class="br0">&#41;</span><span class="br0">&#123;</span> <span class="co1">//only do something when there's math on the page</span>
  window.<span class="me1">MathJax</span> <span class="sy0">=</span> <span class="br0">&#123;</span> <span class="co1">//hook into MathJax's configuration</span>
    AuthorInit<span class="sy0">:</span> <span class="kw2">function</span> <span class="br0">&#40;</span><span class="br0">&#41;</span> <span class="br0">&#123;</span>
      MathJax.<span class="me1">Hub</span>.<span class="me1">Register</span>.<span class="me1">StartupHook</span><span class="br0">&#40;</span><span class="st0">&quot;End&quot;</span><span class="sy0">,</span><span class="kw2">function</span> <span class="br0">&#40;</span><span class="br0">&#41;</span> <span class="br0">&#123;</span> <span class="co1">//when MathJax is done...</span>
        MathJax.<span class="me1">Hub</span>.<span class="me1">Queue</span><span class="br0">&#40;</span>
            <span class="kw2">function</span><span class="br0">&#40;</span><span class="br0">&#41;</span><span class="br0">&#123;</span>
             mathTags.<span class="me1">show</span><span class="br0">&#40;</span><span class="br0">&#41;</span><span class="sy0">;</span> <span class="co1">// .. make the span around the mathy part visible</span>
             $<span class="br0">&#40;</span><span class="st0">'.mjax-fallback'</span><span class="br0">&#41;</span>.<span class="me1">hide</span><span class="br0">&#40;</span><span class="br0">&#41;</span><span class="sy0">;</span> <span class="co1">//hide fallback</span>
            <span class="br0">&#125;</span>
        <span class="br0">&#41;</span><span class="sy0">;</span>
      <span class="br0">&#125;</span><span class="br0">&#41;</span><span class="sy0">;</span>
    <span class="br0">&#125;</span>
  <span class="br0">&#125;</span><span class="sy0">;</span>
  mw.<span class="me1">loader</span>.<span class="me1">load</span><span class="br0">&#40;</span><span class="st0">'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS_CHTML'</span><span class="br0">&#41;</span><span class="sy0">;</span><span class="co1">//load MathJax with a suitable combined config file</span>
<span class="br0">&#125;</span></pre></div></div>                    <!-- /bodycontent -->
                                        <!-- printfooter -->
                    <div class="printfooter">
                    Retrieved from "<a href="http://en.cppreference.com/mwiki/index.php?title=MediaWiki:Gadget-mathjax.js&amp;oldid=94058">http://en.cppreference.com/mwiki/index.php?title=MediaWiki:Gadget-mathjax.js&amp;oldid=94058</a>"                    </div>
                    <!-- /printfooter -->
                                                            <!-- catlinks -->
                    <div id='catlinks' class='catlinks catlinks-allhidden'></div>                    <!-- /catlinks -->
                                                            <div class="visualClear"></div>
                    <!-- debughtml -->
                                        <!-- /debughtml -->
                </div>
                <!-- /bodyContent -->
            </div>
        </div>
        <!-- /content -->
        <!-- footer -->
        <div id="cpp-footer-base" class="noprint">
            <div id="footer">
                        <div id="cpp-navigation">
            <h5>Navigation</h5>
            <ul>
<li id="n-Support-us"><a href="http://www.cppreference.com/support" rel="nofollow">Support us</a></li><li id="n-recentchanges"><a href="Special:RecentChanges" title="A list of recent changes in the wiki [r]" accesskey="r">Recent changes</a></li><li id="n-FAQ"><a href="Cppreference:FAQ">FAQ</a></li><li id="n-Offline-version"><a href="Cppreference:Archives">Offline version</a></li>            </ul>
        </div>
                        <div id="cpp-toolbox">
            <h5><span>Toolbox</span><a href="MediaWiki:Gadget-mathjax.js#"></a></h5>
            <ul>
<li id="t-whatlinkshere"><a href="http://en.cppreference.com/w/Special:WhatLinksHere/MediaWiki:Gadget-mathjax.js" title="A list of all wiki pages that link here [j]" accesskey="j">What links here</a></li><li id="t-recentchangeslinked"><a href="http://en.cppreference.com/w/Special:RecentChangesLinked/MediaWiki:Gadget-mathjax.js" title="Recent changes in pages linked from this page [k]" accesskey="k">Related changes</a></li><li id="t-upload"><a href="http://upload.cppreference.com/w/Special:Upload" title="Upload files [u]" accesskey="u">Upload file</a></li><li id="t-specialpages"><a href="Special:SpecialPages" title="A list of all special pages [q]" accesskey="q">Special pages</a></li><li id="t-print"><a href="http://en.cppreference.com/mwiki/index.php?title=MediaWiki:Gadget-mathjax.js&amp;printable=yes" rel="alternate" title="Printable version of this page [p]" accesskey="p">Printable version</a></li><li id="t-permalink"><a href="http://en.cppreference.com/mwiki/index.php?title=MediaWiki:Gadget-mathjax.js&amp;oldid=94058" title="Permanent link to this revision of the page">Permanent link</a></li><li id="t-info"><a href="http://en.cppreference.com/mwiki/index.php?title=MediaWiki:Gadget-mathjax.js&amp;action=info">Page information</a></li>            </ul>
        </div>
                            <ul id="footer-info">
                                    <li id="footer-info-lastmod"> This page was last modified on 3 July 2017, at 14:01.</li>
                                    <li id="footer-info-viewcount">This page has been accessed 21 times.</li>
                            </ul>
                    <ul id="footer-places">
                                    <li id="footer-places-privacy"><a href="Cppreference:Privacy_policy" title="Cppreference:Privacy policy">Privacy policy</a></li>
                                    <li id="footer-places-about"><a href="Cppreference:FAQ" title="Cppreference:About">About cppreference.com</a></li>
                                    <li id="footer-places-disclaimer"><a href="Cppreference:General_disclaimer" title="Cppreference:General disclaimer">Disclaimers</a></li>
                            </ul>
                                    <ul id="footer-icons" class="noprint">
                                    <li id="footer-poweredbyico">
                                            <a href="http://www.mediawiki.org/"><img src="http://en.cppreference.com/mwiki/skins/common/images/poweredby_mediawiki_88x31.png" alt="Powered by MediaWiki" width="88" height="31" /></a>                                            <a href="http://qbnz.com/highlighter/"><img src="http://upload.cppreference.com/mwiki/images/2/2b/powered_by_geshi_88x31.png" alt="Powered by GeSHi" height="31" width="88" /></a>                                            <a href="http://www.tigertech.net/referral/cppreference.com"><img src="http://upload.cppreference.com/mwiki/images/9/94/powered_by_tigertech_88x31.png" alt="Hosted by Tiger Technologies" height="31" width="88" /></a>                                        </li>
                                </ul>
                        <div style="clear:both">
            </div>
            </div>
        </div>
        <!-- /footer -->
        <script>if(window.mw){
mw.loader.state({"site":"loading","user":"missing","user.groups":"ready"});
}</script>
<script src="http://en.cppreference.com/mwiki/load.php?debug=false&amp;lang=en&amp;modules=skins.cppreference2&amp;only=scripts&amp;skin=cppreference2&amp;*"></script>
<script>if(window.mw){
mw.loader.load(["mediawiki.action.view.postEdit","mediawiki.user","mediawiki.page.ready","mediawiki.searchSuggest","mediawiki.hidpi","ext.gadget.ColiruCompiler"], null, true);
}</script>
<script src="http://en.cppreference.com/mwiki/load.php?debug=false&amp;lang=en&amp;modules=site&amp;only=scripts&amp;skin=cppreference2&amp;*"></script>
<script type="text/javascript">
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-2828341-1']);
_gaq.push(['_setDomainName', 'cppreference.com']);
_gaq.push(['_trackPageview']);
</script><!-- Served in 0.075 secs. -->
	</body>
<!-- Cached 20170704103518 -->
</html>
