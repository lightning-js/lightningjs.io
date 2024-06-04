<template>
<pre class="shiki material-theme-palenight" style="background-color: #292D3E" tabindex="0"><code><span class="line"><span style="color: #A6ACCD">Blits</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">Application</span><span style="color: #A6ACCD">(</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">    </span><span style="color: #F07178">template</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">`</span></span>
<span class="line"><span style="color: #89DDFF">        &lt;<span style="color: #FFCB6B">Element</span> <span style="color: #C792EA">w</span>=<span style="color: #C3E88D">"1920"</span> <span style="color: #C792EA">h</span>=<span style="color: #C3E88D">"1080"</span> <span style="color: #C792EA">color</span>=<span style="color: #C3E88D">"#000"</span>&gt;</span></span>
<span class="line"><span style="color: #89DDFF">            &lt;<span style="color: #FFCB6B">Text</span> <span style="color: #C792EA">:content</span>=<span style="color: #C3E88D">"$title"</span>/&gt;</span></span>
<span class="line"><span style="color: #89DDFF">        &lt;/<span style="color: #FFCB6B">Element</span>&gt;</span></span>
<span class="line"><span style="color: #89DDFF">    `</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">    </span><span style="color: #F07178">state</span><span style="color: #89DDFF">()</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">        </span><span style="color: #89DDFF; font-style: italic">return</span><span style="color: #F07178"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">            title</span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #89DDFF">'</span><span style="color: #C3E88D">Lightning 3</span><span style="color: #89DDFF">'</span></span>
<span class="line"><span style="color: #F07178">        </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">    </span><span style="color: #F07178">input</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">        </span><span style="color: #F07178">enter</span><span style="color: #89DDFF">()</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">            </span><span style="color: #89DDFF">this.</span><span style="color: #A6ACCD">title</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #89DDFF">'</span><span style="color: #C3E88D">Lightning 3 is awesome!</span><span style="color: #89DDFF">'</span></span>
<span class="line"><span style="color: #F07178">        </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">    </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #89DDFF">}</span><span style="color: #A6ACCD">)</span></span></code></pre>
</template>