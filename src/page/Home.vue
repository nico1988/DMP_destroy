<template>
<div class="home">
	<div class="c_header">
		<div class="left">
			<div class="fn" @click="h_add()">
				<span class="e_ico-add"></span>
			</div>
		</div>
		<div class="right" @click="h_search()">
			<div class="fn">
				<span class="e_ico-search"></span>
			</div>
		</div>
		<div class="auto">
			<div class="text">远程交付管理</div>
		</div>
	</div>
	<!-- 标题栏 结束 -->
	<div class="c_tab  c_tab-box c_tab-avg">
		<div class="tab">
			<div class="list">
				<ul>
					<li class="on">项目</li>
					<li>预研</li>
					<li>其他</li>
				</ul>
			</div>
		</div>
		<div class="content">
		</div>
	</div>
	<!-- 滚动（替换为 java 组件） 开始 -->
	<div class="c_scroll c_scroll-float c_scroll-header c_scroll-white" style="top:7.1em;">
		<div class="l_padding">
			<!-- 列表 开始 -->
			<div class="c_list c_list-line c_list-border c_list-space">
				<ul>
					<li @click="h_details()" v-for="(list,key) in lists">
						<div class="main">
							<div class="title">{{list.title}}</div>
							<div class="content">{{list.stage}}</div>
							<div class="content">
								<span class="e_progress">
									<span class="e_progressBar">
										<span :style="{width:list.progress+'%'}" class="e_progressProgress">{{list.progress}}%</span>
									</span>
									<input type="hidden" name="myProgress" id="myProgress" />
								</span>
							</div>
						</div>
						<div class="side">
							<div class="e_tag e_tag-navy">
								<span class="e_tagText">{{list.num}}人</span>
							</div>
						</div>
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
/**
 * 列表页
 * xiams 20180116
 */
/* eslint-disable */
export default {
  data() {
    return {
	  lists: [
		{
		  title:"湖南第三代互联网CRM",
		  stage:"研发阶段",
		  progress:50,
		  num:50
		},
		{
		  title:"湖南第三代互联网CRM",
		  stage:"研发阶段",
		  progress:70,
		  num:70
		},
		{
		  title:"湖南第三代互联网CRM",
		  stage:"研发阶段",
		  progress:30,
		  num:30
		}
	  ]
	}
  },
  methods: {
    h_add () {
	  this.$router.push({ path: 'add' })
	},
    h_search () {
	  this.$router.push({ path: 'search' })
	},
	h_details () {
	  this.$router.push({ path: 'details' })
	}
  }
}
</script>

<style>

</style>
