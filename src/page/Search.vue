<template>
<div class="search">
    <div class="c_header">
		<div class="back" @click="s_home()">查询</div>
		<div class="fn"><button type="button" class="e_button-blue"><span class="e_ico-more"></span></button></div>
	</div>
	<div class="c_box c_box-blue l_padding l_padding-u">
		<span class="e_mix e_mix-r" style="width:100%;">
			<input type="text"  placeholder="项目名称/员工姓名" v-model="queryStr"/>
			<span class="e_ico-search" @click="search()"></span>
		</span>
	</div>
	<div class="c_scroll c_scroll-white c_scroll-float c_scroll-header c_scroll-search">
		<!-- 列表 开始 -->
		<div class="c_list">
			<ul>
				<li class="link" v-for="item in peopleList">
					<div class="main" @click="details_person(item.userId)">
						<div class="title">{{item.userName}}</div>
						<div class="c_line"></div>
					</div>
				</li>
				<li class="link" v-for="item in projectList">
					<div class="main" @click="details_project(item.id)">
						<div class="title">{{item.name}}</div>
						<div class="c_line"></div>
					</div>
				</li>
			</ul>
		</div>
		<!-- 列表 结束 -->
	</div>
</div>
</template>

<script>
import search from '../api/Search/search'
/* eslint-disable */
export default {
  mounted () {
	  console.log('Search mounted------>')
  },
  data() {
	  return {
		  queryStr: '',
		  lists: [],
		  peopleList: [],
		  projectList: []
	  }
  },
  methods: {
    s_home () {
	  	this.$router.push({ path: 'home' })
	},
	search () {
		search.queryStr(this.queryStr).then((res) => {
			this.lists = res.data
			this.peopleList = res.data.people;
			this.projectList = res.data.project;
		})
	},
	details_person(userId) {
		this.$router.push({ path: 'details' })
	},
	details_project(id) {
		this.$router.push({ path: 'details' })
	}
  }
}
</script>

<style>

</style>
