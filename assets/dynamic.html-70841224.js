import{_ as a,r as p,o,c as e,a as c,b as n,d as r,w as l,e as s}from"./app-5bde9300.js";const u={},i=s('<h1 id="分区最新视频" tabindex="-1"><a class="header-anchor" href="#分区最新视频" aria-hidden="true">#</a> 分区最新视频</h1><ul><li><a href="#%E8%8E%B7%E5%8F%96%E5%88%86%E5%8C%BA%E6%9C%80%E6%96%B0%E8%A7%86%E9%A2%91%E5%88%97%E8%A1%A8">获取分区最新视频列表</a></li></ul><hr><h2 id="获取分区最新视频列表" tabindex="-1"><a class="header-anchor" href="#获取分区最新视频列表" aria-hidden="true">#</a> 获取分区最新视频列表</h2><blockquote><p>https://api.bilibili.com/x/web-interface/dynamic/region</p></blockquote><p><em>请求方式：GET</em></p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>pn</td><td>num</td><td>页码</td><td>非必要</td><td>默认为1</td></tr><tr><td>ps</td><td>num</td><td>每页项数</td><td>非必要</td><td>默认为5</td></tr><tr><td>rid</td><td>num</td><td>目标分区tid</td><td>必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-400：请求错误</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>archives</td><td>array</td><td>视频列表</td><td></td></tr><tr><td>page</td><td>obj</td><td>页面信息</td><td></td></tr></tbody></table><p><code>data</code>中的<code>archives</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>obj</td><td>视频1</td><td></td></tr><tr><td>n</td><td>obj</td><td>视频(n+1)</td><td></td></tr><tr><td>……</td><td>obj</td><td>……</td><td>……</td></tr></tbody></table><p><code>data</code>中的<code>archives</code>数组中的对象：</p>',16),d=s(`<p><code>data</code>中的<code>page</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>count</td><td>num</td><td>总计视频数</td><td></td></tr><tr><td>num</td><td>num</td><td>当前页码</td><td></td></tr><tr><td>size</td><td>num</td><td>每页项数</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>获取<code>tid=21</code>（生活-&gt;日常）分区中的2条最新动态视频信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/x/web-interface/dynamic/region&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;rid=21&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;ps=2&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;pn=1&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
	<span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;page&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;num&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
			<span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
			<span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token number">189</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;archives&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
			<span class="token property">&quot;aid&quot;</span><span class="token operator">:</span> <span class="token number">56998612</span><span class="token punctuation">,</span>
			<span class="token property">&quot;videos&quot;</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
			<span class="token property">&quot;tid&quot;</span><span class="token operator">:</span> <span class="token number">21</span><span class="token punctuation">,</span>
			<span class="token property">&quot;tname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;日常&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;copyright&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
			<span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i2.hdslb.com/bfs/archive/76536be425ed98ba1f1b9aef1ada3a09f94c9f04.jpg&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;操控百万UP主的一天！&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;pubdate&quot;</span><span class="token operator">:</span> <span class="token number">1562568733</span><span class="token punctuation">,</span>
			<span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1561624175</span><span class="token punctuation">,</span>
			<span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;拍这个视频还挺辛苦的，希望大家喜欢的话给个三连叭！&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
			<span class="token property">&quot;attribute&quot;</span><span class="token operator">:</span> <span class="token number">536887424</span><span class="token punctuation">,</span>
			<span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">1864</span><span class="token punctuation">,</span>
			<span class="token property">&quot;rights&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;bp&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
				<span class="token property">&quot;elec&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
				<span class="token property">&quot;download&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
				<span class="token property">&quot;movie&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
				<span class="token property">&quot;pay&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
				<span class="token property">&quot;hd5&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
				<span class="token property">&quot;no_reprint&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
				<span class="token property">&quot;autoplay&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
				<span class="token property">&quot;ugc_pay&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
				<span class="token property">&quot;is_cooperation&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
				<span class="token property">&quot;ugc_pay_preview&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
				<span class="token property">&quot;no_background&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;owner&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;mid&quot;</span><span class="token operator">:</span> <span class="token number">2206456</span><span class="token punctuation">,</span>
				<span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;花少北丶&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;face&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i1.hdslb.com/bfs/face/86ef6895a8f88c80f2885e7eb9ba7989db437b93.jpg&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;stat&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;aid&quot;</span><span class="token operator">:</span> <span class="token number">56998612</span><span class="token punctuation">,</span>
				<span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token number">2863604</span><span class="token punctuation">,</span>
				<span class="token property">&quot;danmaku&quot;</span><span class="token operator">:</span> <span class="token number">82588</span><span class="token punctuation">,</span>
				<span class="token property">&quot;reply&quot;</span><span class="token operator">:</span> <span class="token number">5502</span><span class="token punctuation">,</span>
				<span class="token property">&quot;favorite&quot;</span><span class="token operator">:</span> <span class="token number">65471</span><span class="token punctuation">,</span>
				<span class="token property">&quot;coin&quot;</span><span class="token operator">:</span> <span class="token number">104905</span><span class="token punctuation">,</span>
				<span class="token property">&quot;share&quot;</span><span class="token operator">:</span> <span class="token number">5815</span><span class="token punctuation">,</span>
				<span class="token property">&quot;now_rank&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
				<span class="token property">&quot;his_rank&quot;</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
				<span class="token property">&quot;like&quot;</span><span class="token operator">:</span> <span class="token number">165638</span><span class="token punctuation">,</span>
				<span class="token property">&quot;dislike&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;dynamic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;你想看的这里都有！&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;cid&quot;</span><span class="token operator">:</span> <span class="token number">99548502</span><span class="token punctuation">,</span>
			<span class="token property">&quot;dimension&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token number">1920</span><span class="token punctuation">,</span>
				<span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token number">1080</span><span class="token punctuation">,</span>
				<span class="token property">&quot;rotate&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;bvid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BV1Wx411d7jX&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;aid&quot;</span><span class="token operator">:</span> <span class="token number">837503204</span><span class="token punctuation">,</span>
			<span class="token property">&quot;videos&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
			<span class="token property">&quot;tid&quot;</span><span class="token operator">:</span> <span class="token number">21</span><span class="token punctuation">,</span>
			<span class="token property">&quot;tname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;日常&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;copyright&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
			<span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i1.hdslb.com/bfs/archive/7025827d8dbfc6139a2d066daa51a08897282534.jpg&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;“都是小人物，就别说什么大话了，活着就行”&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;pubdate&quot;</span><span class="token operator">:</span> <span class="token number">1585264054</span><span class="token punctuation">,</span>
			<span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1585264054</span><span class="token punctuation">,</span>
			<span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;每一位用心生活的小人物，都是各自生活中不平凡的英雄！&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
			<span class="token property">&quot;attribute&quot;</span><span class="token operator">:</span> <span class="token number">16512</span><span class="token punctuation">,</span>
			<span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">295</span><span class="token punctuation">,</span>
			<span class="token property">&quot;mission_id&quot;</span><span class="token operator">:</span> <span class="token number">12868</span><span class="token punctuation">,</span>
			<span class="token property">&quot;rights&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;bp&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
				<span class="token property">&quot;elec&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
				<span class="token property">&quot;download&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
				<span class="token property">&quot;movie&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
				<span class="token property">&quot;pay&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
				<span class="token property">&quot;hd5&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
				<span class="token property">&quot;no_reprint&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
				<span class="token property">&quot;autoplay&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
				<span class="token property">&quot;ugc_pay&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
				<span class="token property">&quot;is_cooperation&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
				<span class="token property">&quot;ugc_pay_preview&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
				<span class="token property">&quot;no_background&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;owner&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;mid&quot;</span><span class="token operator">:</span> <span class="token number">350928606</span><span class="token punctuation">,</span>
				<span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;彼岸的岛&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;face&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i2.hdslb.com/bfs/face/9814b8b6defc045aa07c3bb08e8a30e63afd9f3e.jpg&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;stat&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;aid&quot;</span><span class="token operator">:</span> <span class="token number">837503204</span><span class="token punctuation">,</span>
				<span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token number">142239</span><span class="token punctuation">,</span>
				<span class="token property">&quot;danmaku&quot;</span><span class="token operator">:</span> <span class="token number">602</span><span class="token punctuation">,</span>
				<span class="token property">&quot;reply&quot;</span><span class="token operator">:</span> <span class="token number">702</span><span class="token punctuation">,</span>
				<span class="token property">&quot;favorite&quot;</span><span class="token operator">:</span> <span class="token number">4728</span><span class="token punctuation">,</span>
				<span class="token property">&quot;coin&quot;</span><span class="token operator">:</span> <span class="token number">4712</span><span class="token punctuation">,</span>
				<span class="token property">&quot;share&quot;</span><span class="token operator">:</span> <span class="token number">917</span><span class="token punctuation">,</span>
				<span class="token property">&quot;now_rank&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
				<span class="token property">&quot;his_rank&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
				<span class="token property">&quot;like&quot;</span><span class="token operator">:</span> <span class="token number">7700</span><span class="token punctuation">,</span>
				<span class="token property">&quot;dislike&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;dynamic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#全能打卡挑战##正能量##感人#&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;cid&quot;</span><span class="token operator">:</span> <span class="token number">169901162</span><span class="token punctuation">,</span>
			<span class="token property">&quot;dimension&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token number">1280</span><span class="token punctuation">,</span>
				<span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token number">720</span><span class="token punctuation">,</span>
				<span class="token property">&quot;rotate&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;bvid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BV1cg4y1a7tB&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,6);function k(v,b){const t=p("RouterLink");return o(),e("div",null,[i,c("p",null,[n("基本同"),r(t,{to:"/docs/video/info.html#%E8%8E%B7%E5%8F%96%E8%A7%86%E9%A2%91%E8%AF%A6%E7%BB%86%E4%BF%A1%E6%81%AF%EF%BC%88web%E7%AB%AF%EF%BC%89"},{default:l(()=>[n("获取视频详细信息（web端）")]),_:1}),n("中的data对象")]),d])}const q=a(u,[["render",k],["__file","dynamic.html.vue"]]);export{q as default};
