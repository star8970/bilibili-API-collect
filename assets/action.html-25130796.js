import{_ as t,o as s,c as n,e as a}from"./app-5bde9300.js";const e={},d=a(`<h1 id="相簿操作" tabindex="-1"><a class="header-anchor" href="#相簿操作" aria-hidden="true">#</a> 相簿操作</h1><h2 id="点赞相簿" tabindex="-1"><a class="header-anchor" href="#点赞相簿" aria-hidden="true">#</a> <s>点赞相簿</s></h2><blockquote><p>https://api.vc.bilibili.com/link_draw/v2/Vote/operate</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：Cookie（SESSDATA）</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>doc_id</td><td>num</td><td>相簿id</td><td>必要</td><td></td></tr><tr><td>type</td><td>num</td><td>操作方式</td><td>必要</td><td>1：点赞<br>2：取消赞</td></tr><tr><td>csrf_token</td><td>str</td><td>CSRF Token（位于cookie）</td><td>非必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>1：参数错误<br>3：未登录<br>110022：已经操作过了</td></tr><tr><td>msg</td><td>str</td><td>错误信息</td><td>默认为success</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为success</td></tr><tr><td>data</td><td>obj</td><td>数据本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>type</td><td>num</td><td>操作方式</td><td>1：点赞<br>2：取消赞</td></tr></tbody></table><p><strong>示例：</strong></p><p>点赞相簿<code>id=99184721</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.vc.bilibili.com/link_draw/v2/Vote/operate&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;doc_id=99184721&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;type=1&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf_token=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="收藏相簿" tabindex="-1"><a class="header-anchor" href="#收藏相簿" aria-hidden="true">#</a> <s>收藏相簿</s></h2><blockquote><p>https://api.vc.bilibili.com/user_plus/v1/Fav/add</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：Cookie（SESSDATA）</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>fav_id</td><td>num</td><td>相簿id</td><td>必要</td><td></td></tr><tr><td>biz_type</td><td>num</td><td>2</td><td>必要</td><td>作用尚不明确</td></tr><tr><td>csrf_token</td><td>str</td><td>CSRF Token（位于cookie）</td><td>非必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-400：参数错误<br>-500：未登录<br>-507：已收藏</td></tr><tr><td>msg</td><td>str</td><td>错误信息</td><td>默认为OK</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为OK</td></tr><tr><td>data</td><td>array</td><td>空</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>收藏相簿<code>id=99184721</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https:///api.vc.bilibili.com/user_plus/v1/Fav/add&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;fav_id=99184721&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;biz_type=2&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf_token=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OK&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OK&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="取消收藏相簿" tabindex="-1"><a class="header-anchor" href="#取消收藏相簿" aria-hidden="true">#</a> 取消收藏相簿</h2><blockquote><p>https://api.vc.bilibili.com/user_plus/v1/Fav/delete</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：Cookie（SESSDATA）</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>fav_id</td><td>num</td><td>相簿id</td><td>必要</td><td></td></tr><tr><td>biz_type</td><td>num</td><td>2</td><td>必要</td><td>作用尚不明确</td></tr><tr><td>csrf_token</td><td>str</td><td>CSRF Token（位于cookie）</td><td>非必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-400：参数错误<br>-500：未登录</td></tr><tr><td>msg</td><td>str</td><td>错误信息</td><td>默认为OK</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为OK</td></tr><tr><td>data</td><td>array</td><td>空</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>取消收藏相簿<code>id=99184721</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.vc.bilibili.com/user_plus/v1/Fav/delete&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;fav_id=99184721&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;biz_type=2&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf_token=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OK&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OK&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,42),o=[d];function p(r,i){return s(),n("div",null,o)}const l=t(e,[["render",p],["__file","action.html.vue"]]);export{l as default};
