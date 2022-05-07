package com.srt.service.impl;

import com.srt.mapper.AnimalsMapper;
import com.srt.mapper.BioprojectMapper;
import com.srt.pojo.Animals;
import com.srt.pojo.AnimalsExample;
import com.srt.pojo.Bioproject;
import com.srt.service.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SearchServiceImpl implements SearchService {

    @Autowired
    private AnimalsMapper animalsMapper;

    @Autowired
    private BioprojectMapper bioprojectMapper;

    public List<Animals> getExhibitionInfo() {
        List<Animals> result = animalsMapper.selectByExample(null);
        return result;
    }

    public List<Animals> selectInfo(String species, String sampleSite1, String instrument, String libraryStrategy, String newStudyType, String newDna, String newSex, String startDate, String endDate, String startMonth, String endMonth) {
        List<Animals> result = animalsMapper.selectInfo(species,sampleSite1,instrument,libraryStrategy,newStudyType,newDna,newSex,startDate,endDate,startMonth,endMonth);
        return result;
    }

    public List<Animals> selectChangeInfo(String species, String sampleSite1, String instrument, String libraryStrategy, String newStudyType, String newDna, String newSex, String startDate, String endDate, String startMonth, String endMonth) {
        List<Animals> result = animalsMapper.selectChangeInfo(species,sampleSite1,instrument,libraryStrategy,newStudyType,newDna,newSex,startDate,endDate,startMonth,endMonth);
        return result;
    }

//    public List<Animals> selectInfo(Animals animals) {
//        List<Animals> result = animalsMapper.selectInfo(animals);
//        return result;
//    }

//    public List<Animals> selectWebById(String id) {
//        List<Animals> str = animalsMapper.selectWebById(id);
//        return str;
//    }

    public List<Animals> getAll(String species,String sampleSite1,String instrument,String libraryStrategy,String bioprojecttype) {
        List<Animals> All = animalsMapper.selectAllInfo(species,sampleSite1,instrument,libraryStrategy,bioprojecttype);
        return All;
    }

    public List<Animals> getInfo(){
        List<Animals> Info = animalsMapper.selectByExample(null);
        return Info;
    }

    public List<Animals> getSpecies() {
        List<Animals> species = animalsMapper.selectSpecies(null);
        return species;
    }

    public List<Animals> getSampleSite1() {
        List<Animals> sampleSite1 = animalsMapper.getSampleSite1(null);
        return sampleSite1;
    }

    public List<Animals> getSampleSite2() {
        List<Animals> sampleSite2 = animalsMapper.getSampleSite2(null);
        return sampleSite2;
    }

    public List<Animals> getInstrument() {
        List<Animals> instrument = animalsMapper.getInstrument(null);
        return instrument;
    }

    public List<Animals> getLibraryStrategy() {
        List<Animals> libraryStrategy = animalsMapper.getLibraryStrategy(null);
        return libraryStrategy;
    }

    public List<Bioproject> getBioProjectType(){
        List<Bioproject> result = bioprojectMapper.selectByExample(null);
        return result;
    }

    @Override
    public List<Animals> selectInfoOrder(String species, String sampleSite1, String instrument, String libraryStrategy, String newStudyType, String newDna, String newSex, String startDate, String endDate, String startMonth, String endMonth, String orderField, String order) {
        AnimalsExample example = new AnimalsExample();
        String cause = getMapping(orderField).equals("") ? orderField : getMapping(orderField);
        if(order.equals("descend"))
            cause += " DESC";
        else if(order.equals("ascend"))
            cause += " ASC";
        example.setOrderByClause(cause);
        List<Animals> Info = animalsMapper.selectByExample(example);
        return Info;
    }

    @Override
    public List<Animals> selectChangeInfoOrder(String species, String sampleSite1, String instrument, String libraryStrategy, String newStudyType, String newDna, String newSex, String startDate, String endDate, String startMonth, String endMonth, String orderField, String order) {
        String cause = getMapping(orderField).equals("") ? orderField : getMapping(orderField);
        if(order.equals("descend"))
            cause += " DESC";
        else if(order.equals("ascend"))
            cause += " ASC";
        List<Animals> result = animalsMapper.selectChangeInfo1(species,sampleSite1,instrument,libraryStrategy,newStudyType,newDna,newSex,startDate,endDate,startMonth,endMonth,getMapping(orderField).equals("") ? orderField : getMapping(orderField),cause);
        return result;
    }

    public String getMapping(String source){
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
}