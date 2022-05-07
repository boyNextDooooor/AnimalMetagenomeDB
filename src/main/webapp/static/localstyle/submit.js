const vm = new Vue({
    el: '#app',
    data:{
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
        form: {
            Species: '',
            Bioproject_Accession: '',
            Bioproject_Type: '',
            Feference_PMID: '',
            Email: '',
            desc: '',
        },
        rules: {
            Species: [
                { required: true, message: 'Please input Species', trigger: 'blur' },
                { min: 3, max: 10, message: 'Length should be 3 to 5', trigger: 'blur' },
            ],
            Bioproject_Accession:[
                { required: true, message: 'Please input Bioproject_Accession', trigger: 'blur' },
                { min: 3, max: 10, message: 'Length should be 3 to 5', trigger: 'blur' },
            ],
            Email:[
                { required: true, message: 'Please input Email', trigger: 'blur' },
                { min: 3, max: 20, message: 'Length should be 3 to 5', trigger: 'blur' },
            ],
        }
    },
    // methods:{
    //     onSubmit() {
    //         this.$message.success('Submitted successfully')
    //         this.$refs.ruleForm.resetFields();
    //         // vm.form.Species = '';
    //         // vm.form.Bioproject_Accession = '';
    //         // vm.form.Bioproject_Type = '';
    //         // vm.form.Feference_PMID = '';
    //         // vm.form.Email = '';
    //         // vm.form.desc = '';
    //
    //         // console.log('submit!', this.form);
    //     },
    //
    // }
    methods: {
        onSubmit() {
            this.$refs.ruleForm.validate(valid => {
                if (valid) {
                    alert('submit!');
                    this.$refs.ruleForm.resetFields();
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm() {
            this.$refs.ruleForm.resetFields();
        },
    },
})






// data() {
//     return {
//         labelCol: { span: 4 },
//         wrapperCol: { span: 14 },
//         other: '',
//         form: {
//             name: '',
//             region: undefined,
//             date1: undefined,
//             delivery: false,
//             type: [],
//             resource: '',
//             desc: '',
//         },
//         rules: {
//             name: [
//                 { required: true, message: 'Please input Activity name', trigger: 'blur' },
//                 { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
//             ],
//             region: [{ required: true, message: 'Please select Activity zone', trigger: 'change' }],
//             date1: [{ required: true, message: 'Please pick a date', trigger: 'change' }],
//             type: [
//                 {
//                     type: 'array',
//                     required: true,
//                     message: 'Please select at least one activity type',
//                     trigger: 'change',
//                 },
//             ],
//             resource: [
//                 { required: true, message: 'Please select activity resource', trigger: 'change' },
//             ],
//             desc: [{ required: true, message: 'Please input activity form', trigger: 'blur' }],
//         },
//     };
// },
// methods: {
//     onSubmit() {
//         this.$refs.ruleForm.validate(valid => {
//             if (valid) {
//                 alert('submit!');
//             } else {
//                 console.log('error submit!!');
//                 return false;
//             }
//         });
//     },
//     resetForm() {
//         this.$refs.ruleForm.resetFields();
//     },
// },
