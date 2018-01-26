<template>
<div class="personDetails">
<!-- 标题栏 开始 -->
	<div class="c_header">
		<div class="back" @click="toSearch()">人员详情</div>
	</div>
	<!-- 标题栏 结束 -->
	<!-- 滚动（替换为 java 组件） 开始 -->
	<div class="c_scroll c_scroll-float c_scroll-header c_scroll-white">
		<div class="l_padding">
			<!-- 列表 开始 -->
			<div class="c_list c_list-line">
				<ul>
					<li>
						<div class="pic"><span class="e_pic-img-r e_pic-img-r-l"><img src="../assets/TouchUI/content/img/male.png" alt="" /></span></div>
						<div class="main">
							<div class="title">石先南</div>
							<div class="content">73011</div>
							<div class="content">平台组</div>
						</div>
						<div class="side">
							<div class="e_tag">
								<span class="e_tagText">正式</span>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<!-- 列表 结束 -->
			<div class="c_space"></div>
			<div class="c_line"></div>
			<!-- 列表 开始 -->
			<div class="c_list">
				<ul>
					<li class="link" ontap="goto('details.html')">
						<div class="main">
							<div class="title" >湖南第三代互联网CRM</div>
							<div class="content">2017-12-10 ~ 2015-12-10</div>
						</div>
						<div class="side">开发</div>
					</li>
					<li class="link" ontap="goto('details.html')">
						<div class="main">
							<div class="title" >湖南第三代互联网CRM</div>
							<div class="content">2017-12-10 ~ 2015-12-10</div>
						</div>
						<div class="side">开发</div>
					</li>
					<li class="link" ontap="goto('details.html')">
						<div class="main">
							<div class="title">湖南第三代互联网CRM</div>
							<div class="content">2017-12-10 ~ 2015-12-10</div>
						</div>
						<div class="side">测试</div>
					</li>
				</ul>
			</div>
			<!-- 列表 结束 -->
		</div>
	</div>
	<!-- 滚动 结束 -->
</div>
</template>

<script>
/* eslint-disable */
export default {
  monted() {

  },
  data () {
      return {}
  },
  methods: {
      toSearch() {
        this.$router.push({path:'Search'})
      }
  }
}
</script>

<style>

</style>
