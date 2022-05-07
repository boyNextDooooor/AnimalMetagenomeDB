package com.srt.mapper;

import com.srt.pojo.Gmksz;
import com.srt.pojo.GmkszExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface GmkszMapper {
    long countByExample(GmkszExample example);

    int deleteByExample(GmkszExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(Gmksz record);

    int insertSelective(Gmksz record);

    List<Gmksz> selectByExample(GmkszExample example);

    Gmksz selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") Gmksz record, @Param("example") GmkszExample example);

    int updateByExample(@Param("record") Gmksz record, @Param("example") GmkszExample example);

    int updateByPrimaryKeySelective(Gmksz record);

    int updateByPrimaryKey(Gmksz record);

    List<Gmksz> selectByParentId(int parentId);

    int selectType1(String type);

    int selectType2(String type);

    int selectType3(String type);

    int selectType4(String type);
}