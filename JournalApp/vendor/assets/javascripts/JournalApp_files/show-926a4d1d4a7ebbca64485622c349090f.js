(function() { this.JST || (this.JST = {}); this.JST["posts/show"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<h2>',  post.escape("title") ,'</h2>\n\n',  post.escape("body") ,'\n\n<br>\n<button class="back">Back</button>\n');}return __p.join('');};
}).call(this);
