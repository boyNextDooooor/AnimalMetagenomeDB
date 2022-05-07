package com.srt.service;

import com.srt.pojo.Animals;
import com.srt.pojo.Bioproject;

import java.util.List;

public interface SearchService {

    List<Animals> getExhibitionInfo();

    List<Animals> selectInfo(String species, String sampleSite1, String instrument, String libraryStrategy, String newStudyType, String newDna, String newSex, String startDate, String endDate, String startMonth, String endMonth);

    List<Animals> selectChangeInfo(String species, String sampleSite1, String instrument, String libraryStrategy, String newStudyType, String newDna, String newSex, String startDate, String endDate, String startMonth, String endMonth);
//    List<Animals> selectInfo(Animals animals);

//    List<Animals> selectWebById(String id);

    List<Animals> getAll(String species, String sampleSite1, String instrument, String libraryStrategy, String bioprojecttype);

    List<Animals> getInfo();

    List<Animals> getSpecies();

    List<Animals> getSampleSite1();

    List<Animals> getSampleSite2();

    List<Animals> getInstrument();

    List<Animals> getLibraryStrategy();

    List<Bioproject> getBioProjectType();

    List<Animals> selectInfoOrder(String species, String sampleSite1, String instrument, String libraryStrategy, String newStudyType, String newDna, String newSex, String startDate, String endDate, String startMonth, String endMonth, String orderField, String order);

    List<Animals> selectChangeInfoOrder(String species, String sampleSite1, String instrument, String libraryStrategy, String newStudyType, String newDna, String newSex, String startDate, String endDate, String startMonth, String endMonth, String orderField, String order);
}
