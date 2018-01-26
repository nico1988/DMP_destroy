<template>
<div class="home" >
	<div class="c_header">
		<div class="left">
			<div class="fn" @click="add()">
				<span class="e_ico-add"></span>
			</div>
		</div>
		<div class="right" @click="logout()">
			<div class="fn">
				<span class="e_ico-exit"></span>
			</div>
		</div>
		<div class="auto">
			<div class="text">远程交付管理</div>
		</div>
	</div>
	<div class="c_box c_box-blue l_padding l_padding-u">
		<span class="e_mix e_mix-r" style="width:100%;" >
			<input type="text"  placeholder="" @click="search()"/>
			<span class="e_ico-search e_purple" @click="search()"></span>
		</span>
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
	<!-- 列表 -->
	<div class="c_scroll c_scroll-float c_scroll-header c_scroll-white" style="top:7.1em;" >
		<div class="l_padding">
			<!-- 列表 开始 -->
			<div class="c_list c_list-line c_list-border c_list-space">
				<ul>
					<li @click="to_details()" v-for="list in lists" v-bind:key="list.id" v-if="lists[0].name!=''">
						<div class="main">
							<div class="title">{{list.name}}</div>
							<div class="content">{{list.nodeName}}</div>
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
								<span class="e_tagText">{{list.peopleCount}}人</span>
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
import home from '../api/Home/home'
/**
 * 列表页
 * xiams 20180116
 */
/* eslint-disable */
export default {
  mounted () {
	console.info('HOME mounted------->')
    home.projectList().then((res) => {
		this.lists = res.data
	})
  },
  data() {
    return {
	  lists: [
			{
				name:"",
				nodeName:"",
				progress:0,
				peopleCount:0
			}
	  ]
	}
  },
  methods: {
    add () {
		this.$router.push({ path: 'add' })
	},
	search () {
	  this.$router.push({ path: 'search'})
	},
    logout () {
		var ret = window.confirm("确定退出系统么?");
		if(ret){
			this.$router.push({ path: 'login' })
		}
	},
	to_details () {
		this.$router.push({ path: 'details' })
	}
  }
}
</script>

<style lang="scss">
</style>
