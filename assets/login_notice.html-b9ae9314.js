import{_ as t,o as n,c as s,e as a}from"./app-5bde9300.js";const e={},d=a(`<h1 id="登录记录" tabindex="-1"><a class="header-anchor" href="#登录记录" aria-hidden="true">#</a> 登录记录</h1><h2 id="查询登录记录" tabindex="-1"><a class="header-anchor" href="#查询登录记录" aria-hidden="true">#</a> 查询登录记录</h2><blockquote><p>https://api.bilibili.com/x/safecenter/login_notice</p></blockquote><p><em>请求方式：GET</em></p><p>认证方式：Cookie（SESSDATA）</p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>mid</td><td>num</td><td>用户mid</td><td>必要</td><td></td></tr><tr><td>buvid</td><td>str</td><td>设备虚拟id</td><td>非必要</td><td>web端为操作登录接口时Cookie中的<code>buvid3</code><br>若登录设备无<code>buvid</code>则留空</td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：账号未登录<br>-400：请求错误</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>mid</td><td>num</td><td>登录用户mid</td><td></td></tr><tr><td>device_name</td><td>str</td><td>登录设备</td><td>依靠操作登录接口时的UA决定</td></tr><tr><td>login_type</td><td>str</td><td>登录方式</td><td>根据登录接口决定</td></tr><tr><td>login_time</td><td>str</td><td>登录时间</td><td>YYYY-MM-DD hh:mm:ss</td></tr><tr><td>location</td><td>str</td><td>登录位置</td><td>依靠ip决定</td></tr><tr><td>ip</td><td>str</td><td>登录ip</td><td>部分用<code>*</code>打码</td></tr></tbody></table><p><strong>示例：</strong></p><p>查询用户<code>293793435</code>设备id为<code>fuck_chenrui</code>的登录记录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/x/safecenter/login_notice&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;mid=293793435&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;buvid=fuck_chenrui&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;mid&quot;</span><span class="token operator">:</span> <span class="token number">293793435</span><span class="token punctuation">,</span>
        <span class="token property">&quot;device_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Chrome浏览器&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;login_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;扫码登录&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;login_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2020-10-02 22:42:38&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;location&quot;</span><span class="token operator">:</span> <span class="token string">&quot;中国陕西渭南&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ip&quot;</span><span class="token operator">:</span> <span class="token string">&quot;36.40.***.**&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,16),o=[d];function p(r,i){return n(),s("div",null,o)}const l=t(e,[["render",p],["__file","login_notice.html.vue"]]);export{l as default};
