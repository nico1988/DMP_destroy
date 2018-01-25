<template>
<div class="add">
	<!-- 标题栏 开始 -->
	<div class="c_header">
		<div class="back" @click="toHome">新增</div>
	</div>
	<!-- 标题栏 结束 -->
	<div class="c_scroll c_scroll-float c_scroll-header">
		<div class="l_padding">
			<!-- 表单 开始 -->
			<div class="c_list c_list-form">
				<ul>
					<li class="required">
						<div class="label">分类</div>
						<div class="value">
							<span class="e_select">
								<span>--请选择--</span>
								<input type="hidden" id="mySelect" nullable="yes" desc="选择项目" />
							</span>
						</div>
					</li>
					<li class="required">
						<div class="label">名称</div>
						<div class="value"><input type="text" placeholder="项目名称" v-model="newProject.name"/></div>
					</li>
					<li>
						<div class="label">级别</div>
						<div class="value">
							<span class="e_segment">
								<span class="" idx="0" val="0">一般</span>
								<span idx="1" val="1">难</span>
								<input type="hidden" name="mySegment" id="mySegment" nullable="no" desc="级别" />
							</span>
						</div>
					</li>
					<li class="required">
						<div class="label">督办人</div>
						<div class="value"><span class="e_mix">
							<input type="text" v-model="newProject.supervisor"/>
							<span class="e_ico-check" @click="superviserPerson('superviser')"></span>
						</span></div>
					</li>
					<li>
						<div class="label">归属中心</div>
						<div class="value"><span class="e_select">{{newProject.belong}}</span></div>
					</li>
					<li class="required">
						<div class="label">服务单位</div>
						<div class="value">
							<input type="text" placeholder="服务单位" v-model="newProject.service"/>
						</div>
					</li>
					<li>
						<div class="label">收益预测</div>
						<div class="value"><span class="e_mix">
							<input type="text" v-model="newProject.income"/>
							<span class="e_label">万元</span>
						</span></div>
					</li>
					<li>
						<div class="label">参与人列表</div>
						<div class="value"><span class="e_mix" @click="superviserPerson('peopleList')">
							<input type="text" v-model="newProject.participantsNum+'人'"/>
							<span class="e_ico-check"></span>
						</span></div>
					</li>
					<li>
						<div class="label">描述</div>
						<div class="value"><textarea class="e_textarea-row-2" v-model="newProject.desc"></textarea></div>
					</li>
				</ul>
			</div>
			<!-- 表单 结束 -->
			<!-- 标题 开始 -->
			<div class="c_title">
				<div class="text">节点设置</div>
				<div class="fn">
					<ul>
						<li @click="addNode">
							<span class="e_ico-add"></span>新增
						</li>
					</ul>
				</div>
			</div>
			<!-- 标题 结束 -->
			<!-- 表单 开始 -->
			<div v-for="item in newProject.nodeList">
				<div class="c_list c_list-form">
					<ul>
						<li class="required">
							<div class="label">节点1名称</div>
							<div class="value"><input type="text" v-model="item.nodeName"/></div>
						</li>
						<li class="required">
							<div class="label">节点1开始时间</div>
							<div class="value">
								<span class="e_mix">
									<input type="text" id="myDatefiled" v-model="item.startTime"/>
									<span class="e_ico-date"></span>
								</span>
							</div>
						</li>
						<li class="required">
							<div class="label">节点1开始结束</div>
							<div class="value">
								<span class="e_mix">
									<input type="text" id="nodeEndTime" v-model="item.endTime"/>
									<span class="e_ico-date"></span>
								</span>
							</div>
						</li>
						<li class="required">
							<div class="label">投入预测</div>
							<div class="value">
								<span class="e_mix">
									<input type="text" v-model="item.forecast"/>
									<span class="e_label">人年</span>
								</span>
							</div>
						</li>
						<li>
							<div class="label">交付方式</div>
							<div class="value"><span class="e_select">请选择</span></div>
						</li>
						<li class="required">
							<div class="label">责任人</div>
							<div class="value"><span class="e_mix" @click="superviserPerson('responsible')">
								<input type="text" v-model="newProject.responsible_id"/>
								<span class="e_ico-check"></span>
							</span></div>
						</li>
					</ul>
				</div>
				<!-- 表单 结束 -->
				<div class="c_space"></div>
			</div>
			<div class="c_space-4"></div>
			<!-- 提交 开始 -->
			<div class="c_submit c_submit-full">
				<button type="button" class="e_button-r e_button-l e_button-green" @click="newSubmit(newProject)">提交</button>
			</div>
			<!-- 提交 结束 -->
			<div class="c_space"></div>
			
		</div>
	</div>
	<!-- 滚动 结束 -->
	<!-- 弹窗 开始 -->
	<div class="c_popup" id="UI-popup">
		<div class="c_popupBg" id="UI-popup_bg"></div>
		<div class="c_popupBox">
			<div class="c_popupWrapper" id="UI-popup_wrapper">
				<div class="c_popupGroup">
					<div class="c_popupItem" id="UI-popup-query">
						<div class="c_header">
							<div class="back" ontap="hidePopup(this)">人员列表</div>
						</div>
						<div class="c_box c_box-blue l_padding l_padding-u">
							<span class="e_mix e_mix-r" style="width:100%;">
								<input type="text"  placeholder="工号/姓名"/>
								<span class="e_ico-search"></span>
							</span>
						</div>
						<div class="c_scroll c_scroll-float c_scroll-header c_scroll-search c_scroll-submit">
							<div v-for="item in deptList">
								<!-- 标题 开始 -->
								<div class="c_title">
									<div class="text">{{item.depName}}</div>
									<div class="fn">
										<ul>
											<li><span class="e_ico-unfold"></span></li>
										</ul>
									</div>
								</div>
								<!-- 标题 结束 -->
								<div class="l_padding-side">
									<!-- 列表 开始 -->
									<div class="c_list c_list-line c_list-s c_list-border">
										<ul>
											<li v-for="item in item.userList">
												<div class="fn" ><input type="checkbox" @click="personList(item.userId,item.userName)"/></div>
												<div class="main">
													<div class="title">{{item.userName}} <span class="e_red">【{{item.isDepartmentManager==1?"部门经理":'开发'}}】</span></div>
													<div class="content">{{item.userId}}</div>
												</div>
												<div class="side">
													<span class="e_select e_select-s">{{item.type==1?'项目经理':item.type==2?'开发':item.type==3?'测试':'组长'}}</span>
												</div>
											</li>
										</ul>
									</div>
									<!-- 列表 结束 -->
								</div>
							</div>
						</div>
						<!-- 滚动 结束 -->
						<div class="l_bottom">
							<!-- 提交 开始 -->
							<div class="c_submit c_submit-full">
								<button type="button" class="e_button-l e_button-purple" ontap="hidePopup(this)">确定</button>
							</div>
							<!-- 提交 结束 -->
						</div>
						<!-- 部门经理置顶 默认是组长 -->
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- 弹窗 结束 -->
	<!-- 项目选择 -->
	<div id="mySelect_float" class="c_float">
		<div class="bg"></div>
		<div class="content">
			<div class="c_scrollContent">
				<div class="c_list c_list-pc-s c_list-phone-line ">
					<ul>
						<li class="link" idx="0" title="--请选择--" val="">
							<div class="main">--请选择--</div>
						</li>
						<li class="link" idx="1" title="title_0" val="0">
							<div class="main">商机</div>
						</li>
						<li class="link" idx="2" title="title_1" val="1">
							<div class="main">研发</div>
						</li>
						<li class="link" idx="3" title="title_2" val="2">
							<div class="main">工程</div>
						</li>
						<li class="link" idx="3" title="title_2" val="3">
							<div class="main">需求</div>
						</li>
						<li class="link" idx="3" title="title_2" val="4">
							<div class="main">其他</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import add from '../api/Add/add'
/* eslint-disable */
import '../assets/TouchUI/content/js/ui/component/base/select'
import '../assets/TouchUI/content/js/ui/component/base/segment'
export default {
  mounted() {
	console.info("Add mounted")
	window["mySegment"] = new Wade.Segment("mySegment",{
		disabled:false
	});
	window["myDatefiled"] = new Wade.DateField(
		// 对应元素，在 el 元素下生成下拉框，el 可以为元素 id，或者原生 dom 对象
		"myDatefiled",
		// 参数设置
		{
			dropDown:true,
			now:new Date(1477967371975),
			value:"2018-01-01",
			format:"yyyy-MM-dd",
			useTime:false,
			useLunar:false
		}
	);
	window["nodeEndTime"] = new Wade.DateField(
		// 对应元素，在 el 元素下生成下拉框，el 可以为元素 id，或者原生 dom 对象
		"nodeEndTime",
		// 参数设置
		{
			dropDown:true,
			now:new Date(1477967371975),
			value:"2018-01-01",
			format:"yyyy-MM-dd",
			useTime:false,
			useLunar:false
		}
	);
	window["mySelect"] = new Wade.Select(
		// 对应元素，el 可以为元素 id，或者原生 dom 对象
		"mySelect",
		// 参数设置
		{
			value:"",
			inputable:false,
			disabled:false,
			addDefault:true,
			selectedIndex:-1,
			optionAlign:"right"
		}
	);
	window["UI-popup"] = new Wade.Popup("UI-popup");
  },
  beforeDestroy() {
	  console.info("Add beforeDestroy")
  },
  data() {
	  return {
		  newProject:{ // 新建项目
			  type: 0, // 分类
			  name: '1', // 名称
			  level: 0, // 级别
			  supervisor: 111, // 督办人
			  superviserId: '1', // 督办人
			  belong: 0, // 归属中心
			  service: 1, // 服务单位
			  income: 1, // 收益预测
			  peopleList: [{userId:1111}],
			  participantsNum: '',
			  desc: '1', // 描述
			  nodeNum: 1, // 节点数量
			  nodeList: [ // 节点
				  {
					name: '1',
					startTime: '2018-01-01',
					endTime: '2018-01-01',
					forecast: 1,
					deliveryWay: 0, // 交付方式
					responsible: 1, // 责任人
					responsible_id: 0
				  }
			  ]
		  },
		  deptList: [],
		  personListType: null
	  }
  },
  methods: {
    typeSelect () {

	},
    toHome () {
	  this.$router.push({ path: 'home' })
	},
	superviserPerson (type) { // 人员列表弹窗
	  this.personListType = type  // 弹窗类型
	  showPopup('UI-popup','UI-popup-query')
	  this.deptList = [] // 初始值置空
	  add.deptListUser().then((res) => {
		  this.deptList = [...res.data];
		  console.log(this.deptList)
	  })
	},
	addNode () {
		if(this.newProject.nodeNum >= 6){
			alert("最多添加六个节点")
			return false;
		}
		this.newProject.nodeNum++;
		this.newProject.nodeList.push(this.newProject.nodeList[0])
		console.log('新增节点-当前节点数目-------'+ this.newProject.nodeNum +'个');
	},
	delete () {
		console.log('删除节点');
		this.newProject.nodeNum--;
	},
	personList(list,man) { // 选择人员列表
		switch (this.personListType) {
			case 'superviser':
				this.newProject.superviserId = list
				this.newProject.supervisor = man+'/'+list
				hidePopup('UI-popup')
				break;
			case 'peopleList':
				// todo  多节点提交
				this.newProject.peopleList.push(list)
				this.newProject.participantsNum = this.newProject.peopleList.length;
				console.log(this.newProject.peopleList)
				break;
			case 'responsible':
				this.newProject.responsible = list
				this.newProject.responsible_id = man+'/'+list
				hidePopup('UI-popup')
				break;
			default:
				break;
		}
	},
	newSubmit (obj) { // 新增提交
		this.newProject.type = $("#mySelect").val() // 分类
		this.newProject.level = $('#mySegment').val() // 级别
		console.log(obj)
		// add.newProject(this.newProject).then((res) => {
		// 	if(res.status==200){
		// 		this.toHome()
		// 	}
		// })
	}
  }
}
</script>

<style>

</style>
