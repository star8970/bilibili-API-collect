import{_ as t,o as s,c as n,e as a}from"./app-5bde9300.js";const e={},d=a(`<h1 id="直播间禁言相关-api" tabindex="-1"><a class="header-anchor" href="#直播间禁言相关-api" aria-hidden="true">#</a> 直播间禁言相关 API</h1><h2 id="禁言观众" tabindex="-1"><a class="header-anchor" href="#禁言观众" aria-hidden="true">#</a> 禁言观众</h2><blockquote><p>https://api.live.bilibili.com/xlive/web-ucenter/v1/banned/AddSilentUser</p></blockquote><p><em>请求方式：post</em></p><p>认证方式：Cookie（SESSDATA）</p><p>鉴权方式：Cookie中<code>bili_jct</code>的值正确并与<code>csrf</code>相同</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>room_id</td><td>str</td><td>直播间Id</td><td>必要</td><td></td></tr><tr><td>tuid</td><td>str</td><td>要禁言的uid</td><td>必要</td><td></td></tr><tr><td>msg</td><td>str</td><td>要禁言的弹幕内容</td><td>非必要</td><td></td></tr><tr><td>mobile_app</td><td>str</td><td>web</td><td>必要</td><td>定值&quot;web&quot;即可</td></tr><tr><td>csrf_token</td><td>str</td><td>CSRF Token</td><td>必要</td><td>cookie中的bili_jct字段</td></tr><tr><td>csrf</td><td>str</td><td>CSRF Token</td><td>必要</td><td>cookie中的bili_jct字段</td></tr><tr><td>visit_id</td><td>str</td><td>不明</td><td>非必要</td><td></td></tr></tbody></table><p><strong>json 回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为 &quot;0&quot;</td></tr><tr><td>ttl</td><td>str</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td>成功为空</td></tr></tbody></table><p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-X</span> POST <span class="token string">&#39;https://api.live.bilibili.com/xlive/web-ucenter/v1/banned/AddSilentUser&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;room_id=xxxxxx&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;tuid=xxx&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;msg=xxxx&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;mobile_app=web&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf_token=xx&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xx&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;visit_id=&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-H</span> <span class="token string">&#39;Content-Type:application/x-www-form-urlencoded&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx; bili_jct=xx;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token property">&quot;message&quot;</span><span class="token operator">:</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><h2 id="查询直播间禁言列表" tabindex="-1"><a class="header-anchor" href="#查询直播间禁言列表" aria-hidden="true">#</a> 查询直播间禁言列表</h2><blockquote><p>https://api.live.bilibili.com/xlive/web-ucenter/v1/banned/GetSilentUserList</p></blockquote><p><em>请求方式：post</em></p><p>认证方式：Cookie（SESSDATA）</p><p>鉴权方式：Cookie中<code>bili_jct</code>的值正确并与<code>csrf</code>相同</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>room_id</td><td>str</td><td>直播间Id</td><td>必要</td><td></td></tr><tr><td>ps1</td><td>str</td><td>列表页码</td><td>必要</td><td></td></tr><tr><td>csrf_token</td><td>str</td><td>CSRF Token</td><td>必要</td><td>cookie中的bili_jct字段</td></tr><tr><td>csrf</td><td>str</td><td>CSRF Token</td><td>必要</td><td>cookie中的bili_jct字段</td></tr><tr><td>visit_id</td><td>str</td><td>不明</td><td>非必要</td><td></td></tr></tbody></table><p><strong>json 回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为 &quot;0&quot;</td></tr><tr><td>ttl</td><td>str</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>data</td><td>array</td><td>禁言列表</td><td>数组中为obj</td></tr><tr><td>total</td><td>int</td><td>禁言观众数量</td><td></td></tr><tr><td>total_page</td><td>int</td><td>页码总数量</td><td></td></tr></tbody></table><p><code>data</code>对象中<code>data</code>数组的元素对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>tuid</td><td>num</td><td>禁言者uid</td><td></td></tr><tr><td>tname</td><td>str</td><td>禁言者昵称</td><td></td></tr><tr><td>uid</td><td>num</td><td>发起者uid</td><td></td></tr><tr><td>name</td><td>str</td><td>发起者昵称</td><td></td></tr><tr><td>ctime</td><td>str</td><td>禁言时间</td><td></td></tr><tr><td>id</td><td>num</td><td>禁言记录Id</td><td>解除禁言时用到</td></tr><tr><td>is_anchor</td><td>num</td><td>不明</td><td></td></tr><tr><td>face</td><td>str</td><td>禁言者头像</td><td></td></tr><tr><td>admin_level</td><td>num</td><td>发起者权限</td><td>0:主播，1:房管</td></tr></tbody></table><p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-X</span> POST <span class="token string">&#39;https://api.live.bilibili.com/xlive/web-ucenter/v1/banned/GetSilentUserList&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;room_id=xxxxxxx&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;ps=1&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf_token=xxx&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;visit_id=&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-H</span> <span class="token string">&#39;Content-Type:application/x-www-form-urlencoded&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxxx; bili_jct=xxx;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;tuid&quot;</span><span class="token operator">:</span><span class="token number">123456</span><span class="token punctuation">,</span>
                <span class="token property">&quot;tname&quot;</span><span class="token operator">:</span><span class="token string">&quot;xxxxx&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span><span class="token number">123456</span><span class="token punctuation">,</span>
                <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;xxxx&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span><span class="token string">&quot;2023-12-15 16:32:46&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token number">13493921</span><span class="token punctuation">,</span>
                <span class="token property">&quot;is_anchor&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;face&quot;</span><span class="token operator">:</span><span class="token string">&quot;https://i1.hdslb.com/bfs/face/xxxxx.jpg&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;admin_level&quot;</span><span class="token operator">:</span><span class="token number">1</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;tuid&quot;</span><span class="token operator">:</span><span class="token number">123456</span><span class="token punctuation">,</span>
                <span class="token property">&quot;tname&quot;</span><span class="token operator">:</span><span class="token string">&quot;xx&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span><span class="token number">123456</span><span class="token punctuation">,</span>
                <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;xxxx&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span><span class="token string">&quot;2021-08-23 22:26:06&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token number">8018136</span><span class="token punctuation">,</span>
                <span class="token property">&quot;is_anchor&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">&quot;face&quot;</span><span class="token operator">:</span><span class="token string">&quot;https://i1.hdslb.com/bfs/face/xxxxxx.jpg&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;admin_level&quot;</span><span class="token operator">:</span><span class="token number">0</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;total&quot;</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;total_page&quot;</span><span class="token operator">:</span><span class="token number">1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="解除禁言" tabindex="-1"><a class="header-anchor" href="#解除禁言" aria-hidden="true">#</a> 解除禁言</h2><blockquote><p>https://api.live.bilibili.com/banned_service/v1/Silent/del_room_block_user</p></blockquote><p><em>请求方式：post</em></p><p>认证方式：Cookie（SESSDATA）</p><p>鉴权方式：Cookie中<code>bili_jct</code>的值正确并与<code>csrf</code>相同</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>roomid</td><td>str</td><td>直播间Id</td><td>必要</td><td>注意该接口名称没有“_”</td></tr><tr><td>id</td><td>str</td><td>禁言记录Id</td><td>必要</td><td>GetSilentUserList 接口获取</td></tr><tr><td>csrf_token</td><td>str</td><td>CSRF Token</td><td>必要</td><td>cookie中的bili_jct字段</td></tr><tr><td>csrf</td><td>str</td><td>CSRF Token</td><td>必要</td><td>cookie中的bili_jct字段</td></tr><tr><td>visit_id</td><td>str</td><td>不明</td><td>非必要</td><td></td></tr></tbody></table><p><strong>json 回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>成功为空</td></tr><tr><td>ttl</td><td>str</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td>成功为空</td></tr></tbody></table><p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-X</span> POST <span class="token string">&#39;https://api.live.bilibili.com/banned_service/v1/Silent/del_room_block_user&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;roomid=xxxxxxxxx&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;id=xxxxx&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf_token=xxx&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;visit_id=&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-H</span> <span class="token string">&#39;Content-Type:application/x-www-form-urlencoded&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxxxxx; bili_jct=xxx;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token property">&quot;msg&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;message&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>`,44),o=[d];function p(r,i){return s(),n("div",null,o)}const c=t(e,[["render",p],["__file","silent_user_manage.html.vue"]]);export{c as default};
