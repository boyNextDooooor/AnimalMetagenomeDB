package com.srt.controller;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.srt.pojo.Animals;
import com.srt.pojo.Bioproject;
import com.srt.service.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("Exhibition")
public class SearchController {

    @Autowired
    private SearchService searchService;

    /**
     * 展示数据
     * @param map
     * @return
     */
    @RequestMapping("getExhibitionInfo")
    @ResponseBody
    public PageInfo getExhibitionInfo(@RequestBody Map map){
        PageInfo pageinfo = new PageInfo();
        int pn=Integer.parseInt(map.get("pn").toString());
        int pageSize=Integer.parseInt(map.get("pageSize").toString()) ;
        PageHelper.startPage(pn, pageSize);
        List<Animals> ExhibitionInfo = searchService.getExhibitionInfo();
        // 使用pageInfo包装查询后的结果，只需要将pageInfo交给页面就行了。
        // 封装了详细的分页信息,包括有我们查询出来的数据，传入连续显示的页数
        PageInfo page = new PageInfo(ExhibitionInfo,5);
        return page;
    }

    /**
     * 搜索信息
     * @param map
     * @return
     */
    @RequestMapping("selectInfo")
    @ResponseBody
    public PageInfo selectInfo(@RequestBody Map map){
        PageInfo pageinfo = new PageInfo();
        int pn=Integer.parseInt(map.get("pn").toString());
        int pageSize=Integer.parseInt(map.get("pageSize").toString()) ;
        String species=map.get("species").toString();
        String sampleSite1=map.get("sampleSite1").toString();
//        String sampleSite2=map.get("sampleSite2").toString();
        String instrument=map.get("instrument").toString();
        String libraryStrategy=map.get("libraryStrategy").toString();
        String newStudyType=map.get("newStudyType").toString();
        String newDna=map.get("newDna").toString();
        String newSex=map.get("newSex").toString();
        String startDate=map.get("startDate").toString();
        String endDate=map.get("endDate").toString();
        String startMonth=map.get("startMonth").toString();
        String endMonth=map.get("endMonth").toString();
        String orderField = map.get("orderField").toString();
        String order = map.get("order").toString();
        PageHelper.startPage(pn, pageSize);
        List<Animals> ExhibitionInfo;
        if(order.equals(""))
            ExhibitionInfo = searchService.selectInfo(species,sampleSite1,instrument,libraryStrategy,newStudyType,newDna,newSex,startDate,endDate,startMonth,endMonth);
        else
            ExhibitionInfo = searchService.selectInfoOrder(species,sampleSite1,instrument,libraryStrategy,newStudyType,newDna,newSex,startDate,endDate,startMonth,endMonth,orderField,order);
        // 使用pageInfo包装查询后的结果，只需要将pageInfo交给页面就行了。
        // 封装了详细的分页信息,包括有我们查询出来的数据，传入连续显示的页数
        PageInfo page = new PageInfo(ExhibitionInfo,5);
        return page;
    }

    @RequestMapping("selectChangeInfo")
    @ResponseBody
    public PageInfo selectChangeInfo(@RequestBody Map map){
        PageInfo pageinfo = new PageInfo();
        int pn=Integer.parseInt(map.get("pn").toString());
        int pageSize=Integer.parseInt(map.get("pageSize").toString()) ;
        String species=map.get("species").toString();
        String sampleSite1=map.get("sampleSite1").toString();
//        String sampleSite2=map.get("sampleSite2").toString();
        String instrument=map.get("instrument").toString();
        String libraryStrategy=map.get("libraryStrategy").toString();
        String newStudyType=map.get("newStudyType").toString();
        String newDna=map.get("newDna").toString();
        String newSex=map.get("newSex").toString();
        String startDate=map.get("startDate").toString();
        String endDate=map.get("endDate").toString();
        String startMonth=map.get("startMonth").toString();
        String endMonth=map.get("endMonth").toString();
        String orderField = map.get("orderField").toString();
        String order = map.get("order").toString();
        PageHelper.startPage(pn, pageSize);
        List<Animals> ExhibitionInfo;
        if(order.equals(""))
            ExhibitionInfo = searchService.selectChangeInfo(species,sampleSite1,instrument,libraryStrategy,newStudyType,newDna,newSex,startDate,endDate,startMonth,endMonth);
        else
            ExhibitionInfo = searchService.selectChangeInfoOrder(species,sampleSite1,instrument,libraryStrategy,newStudyType,newDna,newSex,startDate,endDate,startMonth,endMonth,orderField,order);
        // 使用pageInfo包装查询后的结果，只需要将pageInfo交给页面就行了。
        // 封装了详细的分页信息,包括有我们查询出来的数据，传入连续显示的页数
        PageInfo page = new PageInfo(ExhibitionInfo,5);
        return page;
    }
//    @RequestMapping("getSkip")
//    @ResponseBody
//    public  List<Animals> selectWebById(@RequestBody Map map){
//        String id = map.get("id").toString();
//        return searchService.selectWebById(id);
//    }

    /**
     * 拉取下载所有数据
     * @return
     */
    @RequestMapping("getAll")
    @ResponseBody
    public List<Animals> getAll(@RequestBody Map map){
        String species=map.get("species").toString();
        String sampleSite1=map.get("sampleSite1").toString();
//        String sampleSite2=map.get("sampleSite2").toString();
        String instrument=map.get("instrument").toString();
        String libraryStrategy=map.get("libraryStrategy").toString();
        String bioprojecttype=map.get("bioprojecttype").toString();
        List<Animals> Info = searchService.getAll(species,sampleSite1,instrument,libraryStrategy,bioprojecttype);
        return Info;
    }

    @RequestMapping("getAllInfo")
    @ResponseBody
    public List<Animals> getInfo(){
        return searchService.getInfo();
    }

    // 六个搜索框内容
    @RequestMapping("getSpecies")
    @ResponseBody
    public  List<Animals> getSpecies(){
        return searchService.getSpecies();
    }

    @RequestMapping("getSampleSite1")
    @ResponseBody
    public  List<Animals> getSampleSite1(){
        return searchService.getSampleSite1();
    }

    @RequestMapping("getSampleSite2")
    @ResponseBody
    public  List<Animals> getSampleSite2(){
        return searchService.getSampleSite2();
    }

    @RequestMapping("getInstrument")
    @ResponseBody
    public  List<Animals> getInstrument(){
        return searchService.getInstrument();
    }

    @RequestMapping("getLibraryStrategy")
    @ResponseBody
    public  List<Animals> getLibraryStrategy(){
        return searchService.getLibraryStrategy();
    }

    @RequestMapping("getBioProjectType")
    @ResponseBody
    public List<Bioproject> getBioProjectType(){
        return searchService.getBioProjectType();
    }

//
//    @RequestMapping("getSpecies")
//    @ResponseBody
//    public  List<Animals> getSpecies(){
//        return searchService.getSpecies();
//    }

}
