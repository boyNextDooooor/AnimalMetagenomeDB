var tmpDown;
const vm = new Vue({
    el:'#app',
    data:{
        temporaryData:[],
        //需要打印的数据
        printResult:[],
        // selectedRowKeys: [],
        result:[],
        All:[],
        selectedRowKeys: [],
        columns:[
            {
                title:'Project ID',
                dataIndex:'bioprojectAccession',
                scopedSlots: { customRender: 'lianjieb' },
                sorter: true,
            },
            {
                title:'Sample ID',
                dataIndex:'biosampleAccession',
                scopedSlots: { customRender: 'lianjienew' },
                sorter: true,
            },
            {
                title:'Experiment ID',
                dataIndex:'experimentAccession',
                scopedSlots: { customRender: 'lianjiee' },
                sorter: true,
            },
            {
                title:'PubMed ID',
                dataIndex:'pubmedId',
                scopedSlots: { customRender: 'lianjiep' },
                sorter: true,
            },
            {
                title:'Project Title',
                dataIndex:'studyTitle',
                width: 200,
                scopedSlots: { customRender: 'lianjies' },
                sorter: true,
            },
            {
                title:'Species',
                dataIndex:'species',
                sorter: true,
            },
            {
                title:'Sample Site2',
                dataIndex:'sampleSite',
                sorter: true,
            },
            {
                title:'Study Type',
                dataIndex:'bioprojectType',
                sorter: true,
            },
            {
                title:'Creation Date',
                dataIndex:'creationDate',
                sorter: true,
            },
            {
                title:'Library Strategy',
                dataIndex:'libraryStrategy',
                sorter: true,
            },
            {
                title:'DNA Extraction Method',
                dataIndex:'DNAExtractionMethod',
                sorter: true,
            },
        ],
        options:[],
        // you
        obtions:[],
        optionsTypeOne:[],
        optionsTypeTwo:[],
        a: '',
        outline: '',
        pvalue:"",
        bvalue:"",
        typevalue:"",
        typevaluetwo:"",
        CurrentPage: '',
        total: null,
        pn: 1,
        pageSize: 20,
        pageNum: 0,
        pages: "",
        FAQ:true,
        BioProjectType: [],
        Outline: [],
        bioprojecttype: '',
        gang: '',
        mu: '',
        ke: '',
        shu: '',
        zhong: '',
        sampleSite0: '',
        sampleSite1: '',
        sampleSite0List: [],
        nowOrder: {
            orderField: '',
            order: '',
        },
        sampleSiteModel: null,
    },
    components: {
        VNodes: {
            functional: true,
            render: (h, ctx) => ctx.props.vnodes,
        },
    },
    created: function (){

    },
    mounted: function (){
        this.getPageInfo(1,20);
        // getGroup();
        // this.getBioProjectType();
        // this.getOutline();
        // this.getSampleSite1();
    },

    methods:{
        transUrl(){
            let url = window.location.href;
            if(url.split("?").length > 1){
                let param = url.split("?")[1];
                let key = param.split("=")[0];
                let value = param.split("=")[1];
                if(key == "Wild%20animals"){
                    this.pvalue = 'Wild animals';
                }
                else if(key == "Domestic%20animals"){
                    this.pvalue = 'Domestic animals';
                }
                else if(key == "gang")
                    this.gang = value;
                else if(key == "mu")
                    this.mu = value;
                else if(key == "ke")
                    this.ke = value;
                else if(key == "shu")
                    this.shu = value;
                else if(key == "zhong")
                    this.zhong = value;
                else if(key == "studyType"){
                    value = value.replaceAll('%20',' ');
                    this.bioprojecttype = value;
/*
                    let tmp = value.split('-');
                    for(let i = 0;i < tmp.length;i++)
                        if(i == 0)
                            this.BioProjectType = this.BioProjectType.filter(item => item.value == tmp[i]);
                        else
                            this.BioProjectType = this.BioProjectType[0].children.filter(item => item.value == tmp[i]);
*/
                    // if(tmp.length == 1){
                    //
                    // }
                    // else if(tmp.length == 2){
                    //
                    // }
                    // else if(tmp.length == 3){
                    //
                    // }
                }
                else if(key == "sampleSite"){
                    let tmp = value.split('&');
                    if(tmp.length == 2){
                        this.sampleSite1 = tmp[1];
                    }
                    this.sampleSite0 = tmp[0];
                }
                this.onChange(1);
            }
        },
        //设置表格奇偶行的颜色不同
        rowClassName(record, index) {
            // console.log(record, index);
            let className = 'light-row';
            if (index % 2 === 1)
                className = 'dark-row';
            return className;
        },
        rowSelection() {},
        printData() {
            if( vm.selectedRowKeys.length == 0){
                    if(vm.pvalue != '' || vm.gang != ''|| vm.mu != ''|| vm.ke != ''|| vm.shu != '' || vm.zhong != ''||  vm.bioprojecttype != ''){
                    this.DownLoadAllInfo();
                }
                // this.downloadExl( vm.All);
            }else{
                vm.printResult=[];
                for(var i=0;i<vm.selectedRowKeys.length;i++){
                    for(var j = 0;j < vm.result.length;j++){
                        if(vm.selectedRowKeys[i] == vm.result[j].experimentAccession){
                            vm.printResult.push(vm.result[j]);
                            break;
                        }
                    }
                }
                this.downloadExl(vm.printResult);
                // this.downloadExl(abc(vm.printResult));
                console.log(vm.printResult);
            }
        },
        DownLoadAllInfo(){
            that = this;
            axios.post('/Animals/selectAll', {
                Species: vm.pvalue,
                Genus: vm.bvalue,
                Bioprojecttype: vm.bioprojecttype,
                gang: vm.gang == undefined ? '' : vm.gang,
                mu: vm.mu == undefined ? '' : vm.mu,
                ke: vm.ke == undefined ? '' : vm.ke,
                shu: vm.shu == undefined ? '' : vm.shu,
                zhong: vm.zhong == undefined ? '' : vm.zhong,
                sampleSite0: vm.sampleSite0 == undefined ? '' : vm.sampleSite0,
                sampleSite1: vm.sampleSite1 == undefined ? '' : vm.sampleSite1,
            }).then(function (response) {
                vm.AllInfo = [];
                vm.AllInfo = response.data;
                delete vm.AllInfo.breed;
                delete vm.AllInfo.collectionDate;
                delete vm.AllInfo.conditions;
                delete vm.AllInfo.experimentTitle;
                delete vm.AllInfo.family;
                delete vm.AllInfo.firstClo;
                delete vm.AllInfo.genus;
                delete vm.AllInfo.geographicLocation;
                delete vm.AllInfo.instrument;
                delete vm.AllInfo.latitude;
                delete vm.AllInfo.lianjieb;
                delete vm.AllInfo.lianjiee;
                delete vm.AllInfo.lianjiep;
                delete vm.AllInfo.lianjies;
                delete vm.AllInfo.lianjienew;
                delete vm.AllInfo.librarySelection;
                delete vm.AllInfo.librarySource;
                delete vm.AllInfo.longitude;
                delete vm.AllInfo.orders;
                delete vm.AllInfo.organismName;
                delete vm.AllInfo.outline;
                delete vm.AllInfo.pheotype;
                delete vm.AllInfo.sampleName;
                delete vm.AllInfo.sampleSite;
                delete vm.AllInfo.sampleTitle;
                delete vm.AllInfo.sampleType;
                delete vm.AllInfo.secondClo;
                delete vm.AllInfo.sex;
                delete vm.AllInfo.sourceDatabase;
                delete vm.AllInfo.species;
                delete vm.AllInfo.studyAccession;
                delete vm.AllInfo.submitter;
                delete vm.AllInfo.totalBases;
                delete vm.AllInfo.totalRuns;
                delete vm.AllInfo.totalSize;
                delete vm.AllInfo.totalSpots;
                delete vm.AllInfo.age;
                delete vm.AllInfo.extra1;
                delete vm.AllInfo.extra2;
                that.downloadExl(vm.AllInfo);
                // vm.AllInfo = response.data.list;
                console.log(vm.AllInfo);
            }).catch(function (error) {
                console.log(error);
            });
        },

        // getAll() {
        //     that = this;
        //     axios.post('/Animals/getAllInfo',{
        //     }).then(function (response) {
        //         console.log(response);
        //         vm.AllInfo = [];
        //         vm.AllInfo = response.data;
        //         that.downloadExl(vm.AllInfo);
        //         // this.printInfo();
        //     }).catch(function (error) {
        //         console.log(error)
        //     });
        // },
        filterOption(input, option) {
            return (
                option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
            );
        },
        downloadExl(json, type)   {
            // console.log(json);
            json = abc(json);
            //根据json数据，获取excel的第一行(例如:姓名、年龄、性别)存至map
            var tmpdata = json[0];
            json.unshift({});
            var keyMap = []; //获取keys
            for (var k in tmpdata) {
                keyMap.push(k);
                json[0][k] = k;
            }
            var tmpdata = [];
            json.map((v, i) => keyMap.map((k, j) => Object.assign({}, {
                v: v[k],
                position: (j > 25 ? getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1)
            }))).reduce((prev, next) => prev.concat(next)).forEach((v, i) => tmpdata[v.position] = {
                v: v.v
            });
            //设置区域,比如表格从A1到D10
            var outputPos = Object.keys(tmpdata);
            var tmpWB = {
                SheetNames: [], //保存的表标题
                Sheets: { }
            };
            var sheetName = 'sheet';
            tmpWB.SheetNames.push(sheetName);
            tmpWB.Sheets[sheetName] = Object.assign({},
                tmpdata, //内容
                { '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1] }//设置填充区域
            );
            //创建二进制对象写入转换好的字节流
            tmpDown = new Blob([s2ab(XLSX.write(tmpWB,
                { bookType: (type == undefined ? 'xlsx' : type), bookSST: false, type: 'binary' }//这里的数据是用来定义导出的格式类型
            ))], {
                type: ""
            });
            var href = URL.createObjectURL(tmpDown); //创建对象超链接
            var aLink = document.createElement('a');
            aLink.href = href;//绑定a标签
            aLink.download = new Date().getTime() + '.xlsx';
            aLink.click();//模拟点击实现下载

            setTimeout(function () { //延时释放
                URL.revokeObjectURL(tmpDown); //用URL.revokeObjectURL()来释放这个object URL
            }, 100);
            // this.getExhibitionInfo(vm.pn, vm.pageSize);
            this.onChange(vm.pn)
        },
        // onChangeType(value) {
        //     console.log(value);
        // },
        DeselectSampleSite0() {
            vm.sampleSite0 = '';
            vm.sampleSite1 = '';
            vm.onChange(1);
        },
        //选择页数
        onChange(pageNumber) {
            // console.log('Page: ', pageNumber);
            vm.pn = pageNumber;
            vm.FAQ = true;
            // console.log(vm.pvalue)
            axios.post('/Animals/selectChangeInfo', {
                pn: vm.pn,
                pageSize: vm.pageSize,
                Species: vm.pvalue,
                Genus: vm.bvalue,
                Bioprojecttype: vm.bioprojecttype,
                gang: vm.gang == undefined ? '' : vm.gang,
                mu: vm.mu == undefined ? '' : vm.mu,
                ke: vm.ke == undefined ? '' : vm.ke,
                shu: vm.shu == undefined ? '' : vm.shu,
                zhong: vm.zhong == undefined ? '' : vm.zhong,
                sampleSite0: vm.sampleSite0 == undefined ? '' : vm.sampleSite0,
                sampleSite1: vm.sampleSite1 == undefined ? '' : vm.sampleSite1,
            }).then(function (response) {
                vm.result = response.data.page.list;
                vm.pageNum = response.data.page.pageNum;
                vm.pages = response.data.page.pages;
                vm.total = response.data.page.total;
                vm.options = response.data.objs.speciesOpt;
                vm.sampleSite0List = response.data.objs.sampleSiteOpt;
                vm.BioProjectType = response.data.objs.studyTypeOpt;
                vm.FAQ = false;
            }).catch(function (error) {
                console.log(error);
            });
        },

        onSelectChange(selectedRowKeys) {
            console.log('selectedRowKeys changed: ', selectedRowKeys);
            this.selectedRowKeys = selectedRowKeys;
        },

        // onChange(pageNumber) {
        //     console.log('Page: ', pageNumber);
        //     vm.pn = pageNumber;
        //     vm.getPageInfo(vm.pn, vm.pageSize);
        //     vm.sousuo(vm.pn, vm.pageSize);
        //     vm.sousuoy(vm.pn, vm.pageSize);
        //     vm.sousuotype(vm.pn, vm.pageSize);
        // },
//分页
        getPageInfo(pn, pageSize) {
            this.FAQ = true;
            axios.post('/Animals/getPageInfo',{
                pn: pn,
                pageSize: pageSize,
            }).then(function (response) {
                // vm.result = response.data.list;
                // vm.pageNum = response.data.pageNum;
                // vm.pages = response.data.pages;
                // vm.total = response.data.total;
                vm.FAQ = false;
                // for(var i=0;i<response.data.list.length;i++){
                //     vm.temporaryData.push(response.data.list[i])
                // }
                vm.transUrl();
            }).catch(function (error) {
                console.log(error);
            });
        },
//搜索Domestic animal
        sousuo(obj,pn,pageSize) {
            console.log(obj)
            this.FAQ = true;
            axios.post('/Animals/selectInfo', {
                pn: pn,
                pageSize: pageSize,
                Species:obj,
            })
                .then(function (response) {
                    console.log(response)
                    console.log(response.data)
                    // vm.result = response.data
                    vm.result = response.data.list;
                    vm.pageNum = response.data.pageNum;
                    vm.pages = response.data.pages;
                    vm.total = response.data.total;
                    vm.FAQ = false;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },

        getSelectValuep(obj){
            // this.sousuo(obj,vm.pn,vm.pageSize);
            console.log(obj)
            vm.pvalue = obj;
            // this.bvalue= "";
            this.outline = "";
            this.a="";
            this.onChange(1);
        },

        b() {
            vm.bioprojecttype = '';
            let tmp = vm.a;
            if(tmp.length == 3 && tmp[2] == tmp[1])
                tmp = tmp.splice(0,2);
            vm.bioprojecttype = tmp.join('-');
            // this.pvalue="";
            // this.outline="";
            this.onChange(1);
        },
        changeSampleSite(){
            vm.sampleSite0 = '';
            vm.sampleSite1 = '';
            if(vm.sampleSiteModel.length > 0)
                vm.sampleSite0 = vm.sampleSiteModel[0];
            if(vm.sampleSiteModel.length > 1)
                vm.sampleSite1 = vm.sampleSiteModel[1];
            this.onChange(1);
        },
//获取下拉框中的数据
        onOutlineChange() {
            console.log(vm.outline);
            vm.gang= '';
            vm.mu= '';
            vm.ke= '';
            vm.shu= '';
            vm.zhong= '';
            vm.gang= vm.outline[0]
            vm.mu= vm.outline[1]
            vm.ke= vm.outline[2]
            vm.shu= vm.outline[3]
            vm.zhong= vm.outline[4]
            this.onChange(1);
            this.a="";
            this.pvalue="";
        },

//重置下拉框
        Reset(){
            location.reload();
        },

        // getSampleSite1() {
        //     axios.post('/Exhibition/getSampleSite1',{
        //
        //     }).then(function (response) {
        //         vm.sampleSite0List = response.data;
        //         // console.log(vm.sampleSite1List)
        //     }).catch(function (error) {
        //         console.log(error);
        //     });
        // },
//将纲目科属种的选项拉进下拉框中
//         getOutline() {
//             axios.post('/Animals/getOutline', {
//
//             })
//                 .then(function (response) {
//                     console.log(response)
//                     let Obj1 = [];
//                     let list = [];
//                     list = response.data
//                     for(let i = 0; i < list.length; i++){
//                         if(list[i].parentId == 0){
//                             var obj = {};
//                             obj.id = list[i].id;
//                             obj.value = list[i].gmksz;
//                             obj.label = list[i].gmksz;
//                             obj.children = [];
//                             Obj1.push(obj);
//                         }
//                     }
//
//                     for(let i = 0; i < list.length; i++){
//                         for(let j = 0; j < Obj1.length; j++){
//                             if(list[i].parentId == Obj1[j].id){
//                                 var obj = {};
//                                 obj.id = list[i].id;
//                                 obj.value = list[i].gmksz;
//                                 obj.label = list[i].gmksz;
//                                 obj.children = [];
//                                 Obj1[j].children.push(obj);
//                             }
//                         }
//                     }
//
//                     for(let i = 0; i < list.length; i++){
//                         for(let j = 0; j < Obj1.length; j++){
//                             for(let k = 0; k < Obj1[j].children.length; k++){
//                                 if(list[i].parentId == Obj1[j].children[k].id){
//                                     var obj = {};
//                                     obj.id = list[i].id;
//                                     obj.value = list[i].gmksz;
//                                     obj.label = list[i].gmksz;
//                                     obj.children = [];
//                                     Obj1[j].children[k].children.push(obj);
//                                 }
//                             }
//                         }
//                     }
//
//                     for(let i = 0; i < list.length; i++){
//                         for(let j = 0; j < Obj1.length; j++){
//                             for(let k = 0; k < Obj1[j].children.length; k++){
//                                 for (let l = 0; l < Obj1[j].children[k].children.length; l++){
//                                     if(list[i].parentId == Obj1[j].children[k].children[l].id){
//                                         var obj = {};
//                                         obj.id = list[i].id;
//                                         obj.value = list[i].gmksz;
//                                         obj.label = list[i].gmksz;
//                                         obj.children = [];
//                                         Obj1[j].children[k].children[l].children.push(obj);
//                                     }
//                                 }
//                             }
//                         }
//                     }
//
//                     for(let i = 0; i < list.length; i++){
//                         for(let j = 0; j < Obj1.length; j++){
//                             for(let k = 0; k < Obj1[j].children.length; k++){
//                                 for (let l = 0; l < Obj1[j].children[k].children.length; l++){
//                                     for (let m = 0; m < Obj1[j].children[k].children[l].children.length; m++){
//                                         if(list[i].parentId == Obj1[j].children[k].children[l].children[m].id){
//                                             var obj = {};
//                                             obj.id = list[i].id;
//                                             obj.value = list[i].gmksz;
//                                             obj.label = list[i].gmksz;
//                                             Obj1[j].children[k].children[l].children[m].children.push(obj);
//                                         }
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                     vm.Outline = Obj1
//                     console.log(vm.Outline)
//                 })
//                 .catch(function (error) {
//                     console.log(error);
//                 });
//         },
/*
        getBioProjectType() {
            axios.post('/Animals/getBioProjectType', {

            })
                .then(function (response) {
                    let Obj1 = [];
                    let list = [];
                    list = response.data
                    for(let i = 0; i < list.length; i++){
                        if(list[i].parentId == 0){
                            var obj = {};
                            obj.id = list[i].id;
                            obj.value = list[i].bioProjectType;
                            obj.label = list[i].bioProjectType;
                            obj.children = [];
                            Obj1.push(obj);
                        }
                    }

                    for(let i = 0; i < list.length; i++){
                        for(let j = 0; j < Obj1.length; j++){
                            if(list[i].parentId == Obj1[j].id){
                                var obj = {};
                                obj.id = list[i].id;
                                obj.value = list[i].bioProjectType;
                                obj.label = list[i].bioProjectType;
                                obj.children = [];
                                Obj1[j].children.push(obj);
                            }
                        }
                    }

                    for(let i = 0; i < list.length; i++){
                        for(let j = 0; j < Obj1.length; j++){
                            for(let k = 0; k < Obj1[j].children.length; k++){
                                if(list[i].parentId == Obj1[j].children[k].id){
                                    var obj = {};
                                    obj.id = list[i].id;
                                    obj.value = list[i].bioProjectType;
                                    obj.label = list[i].bioProjectType;
                                    Obj1[j].children[k].children.push(obj);
                                }
                            }
                        }
                    }

                    vm.BioProjectType = Obj1;
                    console.log(vm.BioProjectType);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
*/
        changeTab (p, f, { field, order }) {
            this.nowOrder.orderField = field || '';
            this.nowOrder.order = order || '';
            this.FAQ = true;
            axios.post('/Animals/selectChangeInfoOrder', {
                pn: vm.pn,
                pageSize: vm.pageSize,
                Species: vm.pvalue,
                Genus: vm.bvalue,
                Bioprojecttype: vm.bioprojecttype,
                gang: vm.gang == undefined ? '' : vm.gang,
                mu: vm.mu == undefined ? '' : vm.mu,
                ke: vm.ke == undefined ? '' : vm.ke,
                shu: vm.shu == undefined ? '' : vm.shu,
                zhong: vm.zhong == undefined ? '' : vm.zhong,
                sampleSite0: vm.sampleSite0 == undefined ? '' : vm.sampleSite0,
                sampleSite1: vm.sampleSite1 == undefined ? '' : vm.sampleSite1,
                orderField: field || '',
                order: order || ''
            }).then(function (response) {
                vm.result = response.data.page.list;
                vm.pageNum = response.data.page.pageNum;
                vm.pages = response.data.page.pages;
                vm.total = response.data.page.total;
                vm.FAQ = false;
            }).catch(function (error) {
                console.log(error);
            });
        },
    }
})
// function getGroup() {
//     axios.post('/Animals/getGroup',{
//     }).then(function (response) {
//
//         for(let i=0;i<response.data.length;i++)
//         {
//             // console.log(response.data[i].genus)
//             vm.obtions.push({
//                 value:`${response.data[i].genus}`,
//                 label: `${response.data[i].genus}`,
//             })
//         }
//     })
// }
function getCharCol(n) {
    let temCol = '',
        s = '',
        m = 0
    while (n > 0) {
        m = n % 26 + 1
        s = String.fromCharCode(m + 64) + s
        n = (n - m) / 26
    }
    return s
}

//字符串转字符流
function s2ab(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
}

function abc(def){
    for (const ace of def) {
        delete ace.biosampleAccession;
        delete ace.breed;
        delete ace.collectionDate;
        delete ace.conditions;
        delete ace.experimentTitle;
        delete ace.family;
        delete ace.firstClo;
        delete ace.genus;
        delete ace.geographicLocation;
        delete ace.instrument;
        delete ace.latitude;
        delete ace.lianjieb;
        delete ace.lianjiee;
        delete ace.lianjiep;
        delete ace.lianjies;
        delete ace.lianjienew;
        delete ace.librarySelection;
        delete ace.librarySource;
        delete ace.longitude;
        delete ace.orders;
        delete ace.organismName;
        delete ace.outline;
        delete ace.pheotype;
        delete ace.sampleName;
        delete ace.sampleTitle;
        delete ace.sampleType;
        delete ace.secondClo;
        delete ace.sex;
        delete ace.sourceDatabase;
        delete ace.studyAccession;
        delete ace.submitter;
        delete ace.totalBases;
        delete ace.totalRuns;
        delete ace.totalSize;
        delete ace.totalSpots;
        delete ace.age;
        delete ace.extra1;
        delete ace.extra2;
    }

    return def;
}
