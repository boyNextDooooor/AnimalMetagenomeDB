package com.srt.service.impl;
import com.srt.mapper.AnimalsMapper;
import com.srt.mapper.BioprojectMapper;
import com.srt.mapper.GmkszMapper;
import com.srt.pojo.*;
import com.srt.service.AnimalsService;
import net.sf.json.JSON;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnimalsServiceImpl implements AnimalsService {

    @Autowired
    private AnimalsMapper animalsMapper;

    @Autowired
    private BioprojectMapper bioprojectMapper;


    @Autowired
    private GmkszMapper gmkszMapper;

    public List<Animals> getGroup(){
        List<Animals> result = animalsMapper.selectByGenusl();
        return result;
    }

    public List<Animals> getGroupTypeOne(){
        List<Animals> result = animalsMapper.selectByBioprojectTypeOne();
        return result;
    }

    public List<Animals> getGroupTypeTwo(String FirstClo){
        List<Animals> result = animalsMapper.selectByBioprojectTypeTwo(FirstClo);
        return result;
    }


    public List<Animals> selectInfo(String Species) {
        List<Animals> result = animalsMapper.selectBySpecies(Species);
        return result;
    }

    public List<Animals> getInfo(){
        List<Animals> Info = animalsMapper.selectByExample(null);
        return Info;
    }



    public List<Animals> selectInfoy(String Genus) {
        List<Animals> result = animalsMapper.selectByGenus(Genus);
        return result;
    }

    public List<Animals> selectInfoType(String FirstClo) {
        List<Animals> result = animalsMapper.selectByType(FirstClo);
        return result;
    }


    public List<Animals> getPageInfo(){
        List<Animals> result = animalsMapper.selectExample(null);
        return result;
    }

//    public List<Animals> getOutline(){
//        List<Animals> result = animalsMapper.selectByG(null);
//        return result;
//    }

    public List<Gmksz> getOutline(){
        List<Gmksz> result = gmkszMapper.selectByExample(null);
        return result;
    }
    public List<Bioproject> getBioProjectType(){
        List<Bioproject> result = bioprojectMapper.selectByExample(null);
        return result;
    }

    public List<Animals> getOrders(String gang){
        List<Animals> result = animalsMapper.selectByM(gang);
        return result;
    }

    public List<Animals> selectChangeInfo(String species, String genus, String bioprojecttype, String gang, String mu, String ke, String shu, String zhong, String sampleSite0, String sampleSite1) {
        List<Animals> result = animalsMapper.selectOnChangeInfo(species,genus,bioprojecttype,gang,mu,ke,shu,zhong,sampleSite0,sampleSite1);
        return result;
    }

    public List<Animals> selectAll(String species, String genus, String bioprojecttype, String gang, String mu, String ke, String shu, String zhong){
        List<Animals> result = animalsMapper.selectAll(species,genus,bioprojecttype,gang,mu,ke,shu,zhong);
        return result;
    }

    @Override
    public List<Animals> getPageInfo(int i, int pageSize) {
        return animalsMapper.selectParts(i,pageSize);
    }

    @Override
    public long getCounts() {
        return animalsMapper.countByView();
    }

    @Override
    public List<Animals> selectChangeInfo(String species, String genus, String bioprojecttype, String gang, String mu, String ke, String shu, String zhong, int i, int pageSize) {
        List<Animals> result = animalsMapper.selectOnChangeInfoParts(species,genus,bioprojecttype,gang,mu,ke,shu,zhong,i,pageSize);
        return result;
    }

    @Override
    public List<Gmksz> getTree() {
        List<Gmksz> gmkszs = gmkszMapper.selectByParentId(0);
        for(int i = 0;i < gmkszs.size();i++){
            buildTree(gmkszs.get(i));
        }
//        List<Bioproject> parents = bioprojectMapper.selectByParentId(0);
//        for(int i = 0;i < parents.size();i++){
//            buildTree(parents.get(i));
//        }
        return gmkszs;
    }

    @Override
    public List<Animals> selectChangeInfoOrder(String species, String genus, String bioprojecttype, String gang, String mu, String ke, String shu, String zhong, String sampleSite0, String sampleSite1, String orderField, String order) {
        String cause = getMapping(orderField).equals("") ? orderField : getMapping(orderField);
        if(order.equals("descend"))
            cause += " DESC";
        else if(order.equals("ascend"))
            cause += " ASC";
        List<Animals> result = animalsMapper.selectOnChangeInfoOrder(species,genus,bioprojecttype,gang,mu,ke,shu,zhong,sampleSite0,sampleSite1,getMapping(orderField).equals("") ? orderField : getMapping(orderField),cause);
        return result;
    }

    @Override
    public JSONObject getSearchOptions(String species, String genus, String bioprojecttype, String gang, String mu, String ke, String shu, String zhong, String sampleSite0, String sampleSite1) {
        JSONObject tmp = new JSONObject();
        List<String> speciesOpt = animalsMapper.selectOptionsForSpecies(species,genus,bioprojecttype,gang,mu,ke,shu,zhong,sampleSite0,sampleSite1);

        List<SampleSiteTmp> sampleSiteTmpList = animalsMapper.selectOptionsForSampleSite(species,genus,bioprojecttype,gang,mu,ke,shu,zhong,sampleSite0,sampleSite1);
        JSONArray sampleSiteOpt = new JSONArray();
        String mark0 = "";
        for(int i = 0;i < sampleSiteTmpList.size();){
            if(i == 0)
                mark0 = sampleSiteTmpList.get(0).getSampleSite0();
            JSONObject father = new JSONObject();
            JSONArray children = new JSONArray();
            int j = i;
            for(;j < sampleSiteTmpList.size() && sampleSiteTmpList.get(j).getSampleSite0().equals(mark0);j++){
                JSONObject childrenObj = new JSONObject();
                childrenObj.put("label", sampleSiteTmpList.get(j).getSampleSite1());
                childrenObj.put("value", sampleSiteTmpList.get(j).getSampleSite1());
                children.add(childrenObj);
            }
            father.put("label", mark0);
            father.put("value", mark0);
            father.put("children", children);
            sampleSiteOpt.add(father);
            if(j < sampleSiteTmpList.size())
                mark0 = sampleSiteTmpList.get(j).getSampleSite0();
            i = j;
        }

        List<StudyTypeTmp> studyTypeTmpList = animalsMapper.selectOptionsForStudyType(species,genus,bioprojecttype,gang,mu,ke,shu,zhong,sampleSite0,sampleSite1);
        JSONArray studyTypeOpt = new JSONArray();
        for(int i = 0;i < studyTypeTmpList.size();){
            if(i == 0)
                mark0 = studyTypeTmpList.get(0).getLevel1();
            JSONObject father = new JSONObject();
            JSONArray children = new JSONArray();
            int j = i;
            String mark1 = "";
            for(;j < studyTypeTmpList.size() && studyTypeTmpList.get(j).getLevel1().equals(mark0);){
                if(j == 0)
                    mark1 = studyTypeTmpList.get(0).getLevel2();
                JSONObject father1 = new JSONObject();
                JSONArray children1 = new JSONArray();
                int k = j;
                for(;k < studyTypeTmpList.size() && studyTypeTmpList.get(k).getLevel2().equals(mark1);k++){
                    JSONObject childrenObj = new JSONObject();
                    childrenObj.put("label", studyTypeTmpList.get(k).getLevel3());
                    childrenObj.put("value", studyTypeTmpList.get(k).getLevel3());
                    children1.add(childrenObj);
                }
                father1.put("label", mark1);
                father1.put("value", mark1);
                father1.put("children", children1);
                children.add(father1);
                if(k < studyTypeTmpList.size())
                    mark1 = studyTypeTmpList.get(k).getLevel2();
                j = k;
            }
            father.put("label", mark0);
            father.put("value", mark0);
            father.put("children", children);
            studyTypeOpt.add(father);
            if(j < studyTypeTmpList.size())
                mark0 = studyTypeTmpList.get(j).getLevel1();
            i = j;
        }
        tmp.put("speciesOpt", speciesOpt);
        tmp.put("sampleSiteOpt", sampleSiteOpt);
        tmp.put("studyTypeOpt", studyTypeOpt);
        return tmp;
    }

    public void buildTree(Bioproject bioproject){
        List<Bioproject> tmp = bioprojectMapper.selectByParentId(bioproject.getId());
        if(tmp.size() > 0){
            bioproject.setSons(tmp);
            for(int i = 0;i < tmp.size();i++){
                buildTree(tmp.get(i));
            }
        }
    }

    public void buildTree(Gmksz bioproject){
        List<Gmksz> tmp = gmkszMapper.selectByParentId(bioproject.getId());
        if(tmp.size() > 0){
            bioproject.setSons(tmp);
            for(int i = 0;i < tmp.size();i++){
                buildTree(tmp.get(i));
            }
        }
    }

    private String getMapping(String source){
        String str = "";
        switch (source){
            case "bioprojectAccession":
                str = "Bioproject_Accession";
                break;
            case "bioprojectDescription":
                str = "Bioproject_Description";
                break;
            case "bioprojectType":
                str = "Bioproject_Type";
                break;
            case "biosampleAccession":
                str = "Biosample_Accession";
                break;
            case "collectionDate":
                str = "collection_Date";
                break;
            case "creationDate":
                str = "creation_Date";
                break;
            case "experimentAccession":
                str = "experiment_Accession";
                break;
            case "experimentTitle":
                str = "experiment_Title";
                break;
            case "geographicLocation":
                str = "geographic_Location";
                break;
            case "librarySelection":
                str = "library_Selection";
                break;
            case "librarySource":
                str = "library_Source";
                break;
            case "libraryStrategy":
                str = "library_Strategy";
                break;
            case "organismName":
                str = "organism_Name";
                break;
            case "pubmedId":
                str = "pubmed_Id";
                break;
            case "sampleAccession":
                str = "sample_Accession";
                break;
            case "sampleName":
                str = "sample_Name";
                break;
            case "sampleNumber":
                str = "sample_Number";
                break;
            case "sampleSite":
                str = "sample_Site";
                break;
            case "sampleTitle":
                str = "sample_Title";
                break;
            case "sampleType":
                str = "sample_Type";
                break;
            case "sourceDatabase":
                str = "source_Database";
                break;
            case "studyAccession":
                str = "study_Accession";
                break;
            case "studyTitle":
                str = "study_Title";
                break;
            case "totalBases":
                str = "total_Bases";
                break;
            case "totalRuns":
                str = "total_Runs";
                break;
            case "totalSize":
                str = "total_Size(Mb)";
                break;
            case "totalSpots":
                str = "total_Spots";
                break;
            case "dnaextractionMethod":
                str = "DNA_Extraction_Method";
                break;
            case "studyType":
                str = "study_Type";
                break;
        }
        return str;
    }

//    @Override
//    public List<Gmksz> getTree() {
//        List<Gmksz> parents = gmkszMapper.selectByParentId(0);
//        for(int i = 0;i < parents.size();i++){
//            if(gmkszMapper.selectType1(parents.get(i).getGmksz()) > 0)
//                parents.get(i).setSlots("{ icon: 'genus' }");
//            else if(gmkszMapper.selectType2(parents.get(i).getGmksz()) > 0)
//                parents.get(i).setSlots("{ icon: 'family' }");
//            else if(gmkszMapper.selectType3(parents.get(i).getGmksz()) > 0)
//                parents.get(i).setSlots("{ icon: 'order' }");
//            else if(gmkszMapper.selectType4(parents.get(i).getGmksz()) > 0)
//                parents.get(i).setSlots("{ icon: 'class' }");
//            else
//                parents.get(i).setSlots("{ icon: 'species' }");
//            buildTree(parents.get(i));
//        }
//        return parents;
//    }
//
//    public void buildTree(Gmksz gmksz){
//        List<Gmksz> tmp = gmkszMapper.selectByParentId(gmksz.getId());
//        if(tmp.size() > 0){
//            gmksz.setSons(tmp);
//            for(int i = 0;i < tmp.size();i++){
//                if(gmkszMapper.selectType1(tmp.get(i).getGmksz()) > 0)
//                    tmp.get(i).setSlots("{ icon: 'genus' }");
//                else if(gmkszMapper.selectType2(tmp.get(i).getGmksz()) > 0)
//                    tmp.get(i).setSlots("{ icon: 'family' }");
//                else if(gmkszMapper.selectType3(tmp.get(i).getGmksz()) > 0)
//                    tmp.get(i).setSlots("{ icon: 'order' }");
//                else if(gmkszMapper.selectType4(tmp.get(i).getGmksz()) > 0)
//                    tmp.get(i).setSlots("{ icon: 'class' }");
//                else
//                    tmp.get(i).setSlots("{ icon: 'species' }");
//                buildTree(tmp.get(i));
//            }
//        }
//    }
}
