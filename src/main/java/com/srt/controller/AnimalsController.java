package com.srt.controller;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.srt.pojo.*;
import com.srt.service.AnimalsService;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;


@Controller
@RequestMapping("Animals")
public class AnimalsController {
    @Autowired
    private AnimalsService animalsService;
//    @RequestMapping("getInfo")
//    @ResponseBody
//    public List<Animals> getInfo(){
//        return animalsService.getInfo();
//    }

    @RequestMapping("selectInfo")
    @ResponseBody
    public PageInfo selectInfo(@RequestBody Map map){
//        String Species = map.get("Species").toString();
//        return animalsService.selectInfo(Species);

        PageInfo pageinfo = new PageInfo();
        String Species = map.get("Species").toString();
        int pn=Integer.parseInt(map.get("pn").toString());
        int pageSize=Integer.parseInt(map.get("pageSize").toString()) ;
        PageHelper.startPage(pn, pageSize);
        List<Animals> PageInfo = animalsService.selectInfo(Species);
        // 使用pageInfo包装查询后的结果，只需要将pageInfo交给页面就行了。
        // 封装了详细的分页信息,包括有我们查询出来的数据，传入连续显示的页数
        PageInfo page = new PageInfo(PageInfo,5);
        return  page;

    }
//    @RequestMapping("selectInfoy")
//    @ResponseBody
//    public PageInfo selectInfoy(@RequestBody Map map){
//        PageInfo pageinfo = new PageInfo();
//        String Genus = map.get("Genus").toString();
//        int pn=Integer.parseInt(map.get("pn").toString());
//        int pageSize=Integer.parseInt(map.get("pageSize").toString()) ;
//        PageHelper.startPage(pn, pageSize);
//        List<Animals> PageInfo = animalsService.selectInfoy(Genus);
//        // 使用pageInfo包装查询后的结果，只需要将pageInfo交给页面就行了。
//        // 封装了详细的分页信息,包括有我们查询出来的数据，传入连续显示的页数
//        PageInfo page = new PageInfo(PageInfo,5);
//        return page;
//
//    }

//    @RequestMapping("selectInfoType")
//    @ResponseBody
//    public PageInfo selectInfoType(@RequestBody Map map){
//        PageInfo pageinfo = new PageInfo();
//        String FirstClo = map.get("FirstClo").toString();
//        int pn=Integer.parseInt(map.get("pn").toString());
//        int pageSize=Integer.parseInt(map.get("pageSize").toString()) ;
//        PageHelper.startPage(pn, pageSize);
//        List<Animals> PageInfo = animalsService.selectInfoType(FirstClo);
//        // 使用pageInfo包装查询后的结果，只需要将pageInfo交给页面就行了。
//        // 封装了详细的分页信息,包括有我们查询出来的数据，传入连续显示的页数
//        PageInfo page = new PageInfo(PageInfo,5);
//        return page;
//
//    }
//    public  List<Animals> selectInfoy(@RequestBody Map map){
//        String Genus = map.get("Genus").toString();
//
//        return animalsService.selectInfoy(Genus);
//    }

    @RequestMapping("getPageInfo")
    @ResponseBody
    public PageInfo getPageInfo(@RequestBody Map map){
        PageInfo pageinfo = new PageInfo();
        int pn=Integer.parseInt(map.get("pn").toString());
        int pageSize=Integer.parseInt(map.get("pageSize").toString()) ;
        PageHelper.startPage(pn, pageSize);
        List<Animals> PageInfo = animalsService.getPageInfo();
        // 使用pageInfo包装查询后的结果，只需要将pageInfo交给页面就行了。
        // 封装了详细的分页信息,包括有我们查询出来的数据，传入连续显示的页数
        PageInfo page = new PageInfo(PageInfo,5);
        return page;
/*        int pn=Integer.parseInt(map.get("pn").toString());
        int pageSize=Integer.parseInt(map.get("pageSize").toString()) ;
        PageInfo pageInfo = new PageInfo();
        List<Animals> animals = animalsService.getPageInfo((pn - 1) * pageSize,pageSize);
        long counts = animalsService.getCounts() / 2;
        int pages = (int) Math.round(counts / pageSize + 0.5);
        pageInfo.setList(animals);
        pageInfo.setTotal(counts);
        pageInfo.setPages(pages);
        pageInfo.setSize(pages);
        pageInfo.setPageNum(pn);
        pageInfo.setPageSize(pageSize);
        pageInfo.setStartRow(0);
        pageInfo.setEndRow(animals.size() > 0 ? animals.size() - 1 : 0);
        pageInfo.setNavigatePages(5);
        pageInfo.setHasPreviousPage(pn != 1);
        pageInfo.setHasNextPage(pn != pages);
        pageInfo.setIsFirstPage(pn == 1);
        pageInfo.setIsLastPage(pn == pages);
        calNav(pageInfo);
        pageInfo.setNavigateFirstPage(1);
        pageInfo.setNavigateLastPage(pages);
        return pageInfo;*/
    }

    @RequestMapping("selectChangeInfo")
    @ResponseBody
    public JSONObject selectChangeInfo(@RequestBody Map map){
        int pn=Integer.parseInt(map.get("pn").toString());
        int pageSize=Integer.parseInt(map.get("pageSize").toString()) ;
        String species=map.get("Species").toString();
        String genus=map.get("Genus").toString();
        String bioprojecttype=map.get("Bioprojecttype").toString();
        String gang=map.get("gang").toString();
        String mu=map.get("mu").toString();
        String ke=map.get("ke").toString();
        String shu=map.get("shu").toString();
        String zhong=map.get("zhong").toString();
        String sampleSite0 = map.get("sampleSite0").toString();
        String sampleSite1 = map.get("sampleSite1").toString();
//        List<Animals> ExhibitionInfo0 = animalsService.selectChangeInfo(species,genus,bioprojecttype,gang,mu,ke,shu,zhong,sampleSite0,sampleSite1);
//        List<String> outline = map.get("Bioprojecttype").toString();
        PageHelper.startPage(pn, pageSize);
        List<Animals> ExhibitionInfo = animalsService.selectChangeInfo(species,genus,bioprojecttype,gang,mu,ke,shu,zhong,sampleSite0,sampleSite1);
        // 使用pageInfo包装查询后的结果，只需要将pageInfo交给页面就行了。
        // 封装了详细的分页信息,包括有我们查询出来的数据，传入连续显示的页数
        PageInfo page = new PageInfo(ExhibitionInfo,5);
        JSONObject obj = new JSONObject();
//        List<String> speciesList = new ArrayList<>();
//        List<String> sampleSiteList = new ArrayList<>();
//        for (int i = 0; i < ExhibitionInfo0.size(); i++) {
//            if(!speciesList.contains(ExhibitionInfo0.get(i).getSpecies()))
//                speciesList.add(ExhibitionInfo0.get(i).getSpecies());
//            if(!sampleSiteList.contains(ExhibitionInfo0.get(i).getStudyType()))
//                sampleSiteList.add(ExhibitionInfo0.get(i).getStudyType());
//        }
        obj.put("page",page);
        JSONObject searchOptions = animalsService.getSearchOptions(species,genus,bioprojecttype,gang,mu,ke,shu,zhong,sampleSite0,sampleSite1);
        obj.put("objs",searchOptions);
//        obj.put("speciesList",speciesList);
//        obj.put("sampleSiteList",sampleSiteList);
        return obj;
/*        List<Animals> ExhibitionInfo = animalsService.selectChangeInfo(species,genus,bioprojecttype,gang,mu,ke,shu,zhong,(pn - 1) * pageSize,pageSize);
        PageInfo pageInfo = new PageInfo();
        long counts = animalsService.getCounts() / 2;
        int pages = (int) Math.round(counts / pageSize + 0.5);
        pageInfo.setList(ExhibitionInfo);
        pageInfo.setTotal(counts);
        pageInfo.setPages(pages);
        pageInfo.setSize(pages);
        pageInfo.setPageNum(pn);
        pageInfo.setPageSize(pageSize);
        pageInfo.setStartRow(0);
        pageInfo.setEndRow(ExhibitionInfo.size() > 0 ? ExhibitionInfo.size() - 1 : 0);
        pageInfo.setNavigatePages(5);
        pageInfo.setHasPreviousPage(pn != 1);
        pageInfo.setHasNextPage(pn != pages);
        pageInfo.setIsFirstPage(pn == 1);
        pageInfo.setIsLastPage(pn == pages);
        calNav(pageInfo);
        pageInfo.setNavigateFirstPage(1);
        pageInfo.setNavigateLastPage(pages);
        return pageInfo;*/
    }

    @RequestMapping("selectChangeInfoOrder")
    @ResponseBody
    public JSONObject selectChangeInfoOrder(@RequestBody Map map){
        int pn=Integer.parseInt(map.get("pn").toString());
        int pageSize=Integer.parseInt(map.get("pageSize").toString()) ;
        String species=map.get("Species").toString();
        String genus=map.get("Genus").toString();
        String bioprojecttype=map.get("Bioprojecttype").toString();
        String gang=map.get("gang").toString();
        String mu=map.get("mu").toString();
        String ke=map.get("ke").toString();
        String shu=map.get("shu").toString();
        String zhong=map.get("zhong").toString();
        String sampleSite0 = map.get("sampleSite0").toString();
        String sampleSite1 = map.get("sampleSite1").toString();
        String orderField = map.get("orderField").toString();
        String order = map.get("order").toString();
//        List<String> outline = map.get("Bioprojecttype").toString();
        PageHelper.startPage(pn, pageSize);
        List<Animals> ExhibitionInfo = animalsService.selectChangeInfoOrder(species,genus,bioprojecttype,gang,mu,ke,shu,zhong,sampleSite0,sampleSite1,orderField,order);
        PageInfo page = new PageInfo(ExhibitionInfo,5);
        JSONObject obj = new JSONObject();
        obj.put("page",page);
        return obj;
    }

    @RequestMapping("selectAll")
    @ResponseBody
    public List<Animals> selectAll(@RequestBody Map map){
        String species=map.get("Species").toString();
        String genus=map.get("Genus").toString();
        String bioprojecttype=map.get("Bioprojecttype").toString();
        String gang=map.get("gang").toString();
        String mu=map.get("mu").toString();
        String ke=map.get("ke").toString();
        String shu=map.get("shu").toString();
        String zhong=map.get("zhong").toString();
        String sampleSite0 = map.get("sampleSite0").toString();
        String sampleSite1 = map.get("sampleSite1").toString();
        List<Animals> ExhibitionInfo0 = animalsService.selectChangeInfo(species,genus,bioprojecttype,gang,mu,ke,shu,zhong,sampleSite0,sampleSite1);
        return ExhibitionInfo0;
    }

    @RequestMapping("getAllInfo")
    @ResponseBody
    public List<Animals> getInfo(){
        return animalsService.getInfo();
    }


    @RequestMapping("getGroup")
    @ResponseBody
    public List<Animals> getGroup(){
        return animalsService.getGroup();
    }

    @RequestMapping("getGroupTypeOne")
    @ResponseBody
    public List<Animals> getGroupType(){
        return animalsService.getGroupTypeOne();
    }

    @RequestMapping("getGroupTypeTwo")
    @ResponseBody
    public List<Animals> getGroupTypeTwo(String FirstClo){
        return animalsService.getGroupTypeTwo(FirstClo);
    }

    @RequestMapping("getBioProjectType")
    @ResponseBody
    public List<Bioproject> getBioProjectType(){
        return animalsService.getBioProjectType();
    }

    @RequestMapping("getOutline")
    @ResponseBody
    public List<Gmksz> getOutline(){
        return animalsService.getOutline();
    }


    @RequestMapping("getOrders")
    @ResponseBody
    public List<Animals> getOrders(String gang){
        return animalsService.getOrders(gang);
    }

    public void calNav(PageInfo pageInfo){
        int i;
        if (pageInfo.getPages() <= pageInfo.getNavigatePages()) {
            pageInfo.setNavigatepageNums(new int[pageInfo.getPages()]);

            for(i = 0; i < pageInfo.getPages(); ++i) {
                pageInfo.getNavigatepageNums()[i] = i + 1;
            }
        } else {
            pageInfo.setNavigatepageNums(new int[pageInfo.getNavigatePages()]);
            i = pageInfo.getPageNum() - pageInfo.getNavigatePages() / 2;
            int endNum = pageInfo.getPageNum() + pageInfo.getNavigatePages() / 2;
            if (i < 1) {
                i = 1;

                for(i = 0; i < pageInfo.getNavigatePages(); ++i) {
                    pageInfo.getNavigatepageNums()[i] = i++;
                }
            } else if (endNum > pageInfo.getPages()) {
                endNum = pageInfo.getPages();

                for(i = pageInfo.getNavigatePages() - 1; i >= 0; --i) {
                    pageInfo.getNavigatepageNums()[i] = endNum--;
                }
            } else {
                for(i = 0; i < pageInfo.getNavigatePages(); ++i) {
                    pageInfo.getNavigatepageNums()[i] = i++;
                }
            }
        }
    }

    @RequestMapping("getTree")
    @ResponseBody
    public List<Gmksz> getTree(){
        return animalsService.getTree();
    }

}
