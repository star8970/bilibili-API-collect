import{_ as p,r as o,o as r,c as l,a as n,b as t,d as s,w as i,e as a}from"./app-5bde9300.js";const c={},u=a('<h1 id="protobuf弹幕" tabindex="-1"><a class="header-anchor" href="#protobuf弹幕" aria-hidden="true">#</a> protobuf弹幕</h1><p>2020年5月23日，哔哩哔哩网页端及移动端启用了新的默认弹幕 API，网页端弹幕显示的上限变为原弹幕池上限的两倍。</p><p>新的 API 是以 6min 为一个单位加载，即每次加载 6min 内的弹幕</p><h2 id="获取实时弹幕" tabindex="-1"><a class="header-anchor" href="#获取实时弹幕" aria-hidden="true">#</a> 获取实时弹幕</h2><blockquote><p>https://api.bilibili.com/x/v2/dm/web/seg.so （web端）</p><p>https://api.bilibili.com/x/v2/dm/wbi/web/seg.so （web 端新接口，需要 wbi 认证）</p><p>https://api.bilibili.com/x/v2/dm/list/seg.so （APP端）</p><p>https://i0.hdslb.com/bfs/dm/{data}.bin （BAS/代码弹幕专包）</p></blockquote><p><em>请求方式：GET</em><em>认证方式：半匿名（部分视频在无 Cookie: SESSDATA 时只返回部分弹幕）</em></p><p>此接口与漫画弹幕相同</p>',7),m=n("code",null,"pool=1",-1),b=n("code",null,"mode=1-7",-1),k=n("code",null,"pool=2",-1),v=n("code",null,"mode=8",-1),h=n("code",null,"pool=2",-1),_=n("code",null,"mode=9",-1),g=a('<p><strong>注：仅获取 6min 的整数倍时间内的弹幕，6min 内最多弹幕数为 6000 条（如第一包中弹幕<code>progress</code>值域为0-360000）</strong></p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>type</td><td>num</td><td>弹幕类</td><td>必要</td><td>1：视频弹幕<br>2：漫画弹幕</td></tr><tr><td>oid</td><td>num</td><td>视频 cid</td><td>必要</td><td></td></tr><tr><td>pid</td><td>num</td><td>稿件 avid</td><td>非必要</td><td></td></tr><tr><td>segment_index</td><td>num</td><td>分包</td><td>必要</td><td>6min 一包</td></tr><tr><td>pull_mode</td><td>num</td><td>（？）</td><td>非必要</td><td></td></tr><tr><td>ps</td><td>num</td><td>（？）</td><td>非必要</td><td></td></tr><tr><td>pe</td><td>num</td><td>（？）</td><td>非必要</td><td></td></tr></tbody></table><p><strong>proto回复：</strong></p><p>proto定义见：<a href="../../grpc_api/bilibili/community/service/dm/v1/dm.proto">bilibili.community.service.dm.v1.DmSegMobileReply</a></p>',5),f={href:"https://protogen.marcgravell.com/",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"_pb2.py",-1),x={href:"https://pypi.org/project/protobuf/",target:"_blank",rel:"noopener noreferrer"},w=a(`<p>消息<code>DmSegMobileReply</code>：</p><table><thead><tr><th>名称</th><th>类型</th><th>含义</th><th>备注</th></tr></thead><tbody><tr><td>elems</td><td>repeated DanmakuElem</td><td>弹幕条目</td><td></td></tr></tbody></table><p>消息<code>DanmakuElem</code>：</p><table><thead><tr><th>名称</th><th>类型</th><th>含义</th><th>备注</th></tr></thead><tbody><tr><td>id</td><td>int64</td><td>弹幕 dmid</td><td>唯一 可用于操作参数</td></tr><tr><td>progress</td><td>int32</td><td>视频内弹幕出现时间</td><td>毫秒</td></tr><tr><td>mode</td><td>int32</td><td>弹幕类型</td><td>1 2 3：普通弹幕<br>4：底部弹幕<br>5：顶部弹幕<br>6：逆向弹幕<br>7：高级弹幕<br>8：代码弹幕<br>9：BAS 弹幕（仅限于特殊弹幕专包）</td></tr><tr><td>fontsize</td><td>int32</td><td>弹幕字号</td><td>18：小<br>25：标准<br>36：大</td></tr><tr><td>color</td><td>uint32</td><td>弹幕颜色</td><td>十进制 RGB888 值</td></tr><tr><td>midHash</td><td>string</td><td>发送者 mid 的 HASH</td><td>用于屏蔽用户和查看用户发送的所有弹幕，也可反查用户id</td></tr><tr><td>content</td><td>string</td><td>弹幕内容</td><td>utf-8编码</td></tr><tr><td>ctime</td><td>int64</td><td>弹幕发送时间</td><td>时间戳</td></tr><tr><td>weight</td><td>int32</td><td>权重</td><td>用于智能屏蔽，根据弹幕语义及长度通过AI识别得出<br>范围：[0-10]<br>值越大权重越高</td></tr><tr><td>action</td><td>string</td><td>动作？</td><td></td></tr><tr><td>pool</td><td>int32</td><td>弹幕池</td><td>0：普通池<br>1：字幕池<br>2：特殊池（代码/BAS弹幕）</td></tr><tr><td>idStr</td><td>string</td><td>弹幕 dmid</td><td>字串形式<br>唯一 可用于操作参数</td></tr><tr><td>attr</td><td>int32</td><td>弹幕属性位</td><td>bit0：保护<br>bit1：直播<br>bit2：高赞</td></tr><tr><td>animation</td><td>string</td><td>动画？</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>获取视频<code>av810872(cid=1176840)</code>（炮姐）的实时弹幕分包 1</p><p><strong>注：以下<a href="../grpc_api/bilibili/community/service/dm/v1/dm.proto">proto定义</a>需要编译，<code>bilibili.community.service.dm.v1.dm_pb2</code>并非通过 pypi 安装</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> requests
<span class="token keyword">import</span> google<span class="token punctuation">.</span>protobuf<span class="token punctuation">.</span>text_format <span class="token keyword">as</span> text_format
<span class="token keyword">import</span> bilibili<span class="token punctuation">.</span>community<span class="token punctuation">.</span>service<span class="token punctuation">.</span>dm<span class="token punctuation">.</span>v1<span class="token punctuation">.</span>dm_pb2 <span class="token keyword">as</span> Danmaku

url <span class="token operator">=</span> <span class="token string">&#39;https://api.bilibili.com/x/v2/dm/web/seg.so&#39;</span>
params <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;type&#39;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>         <span class="token comment"># 弹幕类型</span>
    <span class="token string">&#39;oid&#39;</span><span class="token punctuation">:</span> <span class="token number">1176840</span><span class="token punctuation">,</span>    <span class="token comment"># cid</span>
    <span class="token string">&#39;pid&#39;</span><span class="token punctuation">:</span> <span class="token number">810872</span><span class="token punctuation">,</span>     <span class="token comment"># avid</span>
    <span class="token string">&#39;segment_index&#39;</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token comment"># 弹幕分段</span>
<span class="token punctuation">}</span>
resp <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">,</span> params<span class="token punctuation">)</span>
data <span class="token operator">=</span> resp<span class="token punctuation">.</span>content

danmaku_seg <span class="token operator">=</span> Danmaku<span class="token punctuation">.</span>DmSegMobileReply<span class="token punctuation">(</span><span class="token punctuation">)</span>
danmaku_seg<span class="token punctuation">.</span>ParseFromString<span class="token punctuation">(</span>data<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>text_format<span class="token punctuation">.</span>MessageToString<span class="token punctuation">(</span>danmaku_seg<span class="token punctuation">.</span>elems<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> as_utf8<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>id: 711923911
progress: 47880
mode: 1
fontsize: 18
color: 10092288
midHash: &quot;59417e95&quot;
content: &quot;世界第一电击公主殿下,遇到你是我一生最美好的风景!吾炮赛高,永生不离!唯我超电磁炮永世长存! &quot;
ctime: 1418799826
weight: 6
idStr: &quot;711923911&quot;
attr: 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function S(A,q){const d=o("RouterLink"),e=o("ExternalLinkIcon");return r(),l("div",null,[u,n("p",null,[t("只能返回普通弹幕（"),m,t(),b,t("）和代码弹幕（"),k,t(),v,t("），BAS弹幕（"),h,t(),_,t("）请从"),s(d,{to:"/docs/danmaku/danmaku_view_proto.html"},{default:i(()=>[t("弹幕元数据")]),_:1}),t("中获取")]),n("p",null,[t("互动弹幕（UP 主头像弹幕、关联视频、内嵌关注按钮）也不存在这个接口，请从"),s(d,{to:"/docs/danmaku/danmaku_view_proto.html"},{default:i(()=>[t("弹幕元数据")]),_:1}),t("中获取")]),g,n("ul",null,[n("li",null,[n("p",null,[n("a",f,[t("protogen.marcgravell"),s(e)]),t(": 在线编译 protogen 工具, 无需再安装本地编译器(生成文件需加后缀"),y,t("才可使用)")])]),n("li",null,[n("p",null,[n("a",x,[t("protobuf pip"),s(e)]),t(": 可一键安装的 Python 的 protogen 解析库")])])]),w])}const D=p(c,[["render",S],["__file","danmaku_proto.html.vue"]]);export{D as default};
