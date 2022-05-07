package com.srt.mapper;

import com.srt.pojo.Animals;
import com.srt.pojo.AnimalsExample;
import java.util.List;

import com.srt.pojo.SampleSiteTmp;
import com.srt.pojo.StudyTypeTmp;
import org.apache.ibatis.annotations.Param;

public interface AnimalsMapper {
    long countByExample(AnimalsExample example);

    int deleteByExample(AnimalsExample example);

    int deleteByPrimaryKey(String experimentAccession);

    int insert(Animals record);

    int insertSelective(Animals record);

    List<Animals> selectByExample(AnimalsExample example);

    Animals selectByPrimaryKey(String experimentAccession);

    int updateByExampleSelective(@Param("record") Animals record, @Param("example") AnimalsExample example);

    int updateByExample(@Param("record") Animals record, @Param("example") AnimalsExample example);

    int updateByPrimaryKeySelective(Animals record);

    int updateByPrimaryKey(Animals record);

    // 梁皓伟

//    List<Animals> selectChangeInfo(@Param("species") String species,@Param("sampleSite1") String sampleSite1,@Param("instrument") String instrument,@Param("libraryStrategy") String libraryStrategy,@Param("bioprojecttype") String bioprojecttype);

    List<Animals> selectAllInfo(@Param("species") String species,@Param("sampleSite1") String sampleSite1,@Param("instrument") String instrument,@Param("libraryStrategy") String libraryStrategy,@Param("bioprojecttype") String bioprojecttype);

//    List<Animals> selectInfo(Animals record);
//    List<Animals> selectWebById(String id);

    List<Animals> selectSpecies(AnimalsExample example);

    List<Animals> getSampleSite1(AnimalsExample example);

    List<Animals> getSampleSite2(AnimalsExample example);

    List<Animals> getInstrument(AnimalsExample example);

    List<Animals> getLibraryStrategy(AnimalsExample example);

    //    王奎翰
    List<Animals> selectExample(AnimalsExample example);

    List<Animals> selectBySpecies(String Species);

    List<Animals> selectByGenus(String Genus);

    List<Animals> selectByType(String FirstClo);

    List<Animals> selectByGenusl();

    List<Animals> selectByBioprojectTypeOne();

    List<Animals> selectByBioprojectTypeTwo(String firstClo);

    List<Animals> selectOnChangeInfo(@Param("species") String species,@Param("genus") String genus,@Param("bioprojecttype") String bioprojecttype,@Param("gang") String gang,@Param("mu") String mu,@Param("ke") String ke,@Param("shu") String shu,@Param("zhong") String zhong,@Param("sampleSite0") String sampleSite0,@Param("sampleSite1") String sampleSite1);

    List<Animals> selectByG(AnimalsExample example);

    List<Animals> selectByM(String gang);

    //    List<Animals> selectAll(@Param("species") String species,@Param("genus") String genus,@Param("bioprojecttype") String bioprojecttype,@Param("gang") String gang,@Param("mu") String mu,@Param("ke") String ke,@Param("shu") String shu,@Param("zhong") String zhong);
    //    List<Animals> getOutline();
    List<Animals> selectAll(@Param("species") String species,@Param("genus") String genus,@Param("bioprojecttype") String bioprojecttype,@Param("gang") String gang,@Param("mu") String mu,@Param("ke") String ke,@Param("shu") String shu,@Param("zhong") String zhong);

    List<Animals> selectParts(@Param("i") int i, @Param("pageSize") int pageSize);

    long countByView();

    List<Animals> selectOnChangeInfoParts(@Param("species") String species,@Param("genus") String genus,@Param("bioprojecttype") String bioprojecttype,@Param("gang") String gang,@Param("mu") String mu,@Param("ke") String ke,@Param("shu") String shu,@Param("zhong") String zhong, @Param("i") int i, @Param("pageSize") int pageSize);

    List<Animals> selectInfo(@Param("species") String species, @Param("sampleSite1") String sampleSite1, @Param("instrument") String instrument, @Param("libraryStrategy") String libraryStrategy, @Param("newStudyType") String newStudyType, @Param("newDna") String newDna, @Param("newSex") String newSex, @Param("startDate") String startDate, @Param("endDate") String endDate, @Param("startMonth") String startMonth, @Param("endMonth") String endMonth);

    List<Animals> selectChangeInfo1(@Param("species") String species, @Param("sampleSite1") String sampleSite1, @Param("instrument") String instrument, @Param("libraryStrategy") String libraryStrategy, @Param("newStudyType") String newStudyType, @Param("newDna") String newDna, @Param("newSex") String newSex, @Param("startDate") String startDate, @Param("endDate") String endDate, @Param("startMonth") String startMonth, @Param("endMonth") String endMonth, @Param("param") String param, @Param("cause") String cause);

    List<Animals> selectChangeInfo(@Param("species") String species, @Param("sampleSite1") String sampleSite1, @Param("instrument") String instrument, @Param("libraryStrategy") String libraryStrategy, @Param("newStudyType") String newStudyType, @Param("newDna") String newDna, @Param("newSex") String newSex, @Param("startDate") String startDate, @Param("endDate") String endDate, @Param("startMonth") String startMonth, @Param("endMonth") String endMonth);

    List<Animals> selectOnChangeInfoOrder(@Param("species") String species,@Param("genus") String genus,@Param("bioprojecttype") String bioprojecttype,@Param("gang") String gang,@Param("mu") String mu,@Param("ke") String ke,@Param("shu") String shu,@Param("zhong") String zhong, @Param("sampleSite0") String sampleSite0, @Param("sampleSite1") String sampleSite1, @Param("param") String s, @Param("cause") String cause);

    List<String> selectOptionsForSpecies(@Param("species") String species,@Param("genus") String genus,@Param("bioprojecttype") String bioprojecttype,@Param("gang") String gang,@Param("mu") String mu,@Param("ke") String ke,@Param("shu") String shu,@Param("zhong") String zhong,@Param("sampleSite0") String sampleSite0,@Param("sampleSite1") String sampleSite1);

    List<SampleSiteTmp> selectOptionsForSampleSite(@Param("species") String species,@Param("genus") String genus,@Param("bioprojecttype") String bioprojecttype,@Param("gang") String gang,@Param("mu") String mu,@Param("ke") String ke,@Param("shu") String shu,@Param("zhong") String zhong,@Param("sampleSite0") String sampleSite0,@Param("sampleSite1") String sampleSite1);

    List<StudyTypeTmp> selectOptionsForStudyType(@Param("species") String species,@Param("genus") String genus,@Param("bioprojecttype") String bioprojecttype,@Param("gang") String gang,@Param("mu") String mu,@Param("ke") String ke,@Param("shu") String shu,@Param("zhong") String zhong,@Param("sampleSite0") String sampleSite0,@Param("sampleSite1") String sampleSite1);
}