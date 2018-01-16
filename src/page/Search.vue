<template>
<div class="search">
    <div class="c_header">
		<div class="back" ontap="hidePopup(this)">查询</div>
		<div class="fn"><button type="button" class="e_button-blue"><span class="e_ico-more"></span></button></div>
	</div>
	<div class="c_box c_box-blue l_padding l_padding-u">
		<span class="e_mix e_mix-r" style="width:100%;">
			<input type="text"  placeholder="工号/姓名" />
			<span class="e_ico-search"></span>
		</span>
	</div>
	<div class="c_scroll c_scroll-white c_scroll-float c_scroll-header c_scroll-search">
		<!-- 列表 开始 -->
		<div class="c_list c_list-line">
			<ul>
				<li>
					<div class="pic e_ico-pic e_blue e_size-xxxl"><span class="e_ico-user"></span></div>
					<div class="main">
						<div class="title">猴子酒</div>
						<div class="content">平台组</div>
						<div class="content">长沙</div>
						<div class="content">湖南互联网第三代CRM</div>
					</div>
					<div class="side">
						<div class="e_tag">
							<span class="e_tagText">72012</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<!-- 列表 结束 -->
		<div class="c_line"></div>
		<div class="c_box">
			<div class="l_padding e_center e_blue">历史记录</div>
		</div>
		<div class="c_line"></div>
	</div>
</div>
</template>

<script>
/* eslint-disable */
</script>

<style>

</style>
