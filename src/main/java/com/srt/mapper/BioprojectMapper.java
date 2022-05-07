package com.srt.mapper;

import com.srt.pojo.Bioproject;
import com.srt.pojo.BioprojectExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface BioprojectMapper {
    long countByExample(BioprojectExample example);

    int deleteByExample(BioprojectExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(Bioproject record);

    int insertSelective(Bioproject record);

    List<Bioproject> selectByExample(BioprojectExample example);

    Bioproject selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") Bioproject record, @Param("example") BioprojectExample example);

    int updateByExample(@Param("record") Bioproject record, @Param("example") BioprojectExample example);

    int updateByPrimaryKeySelective(Bioproject record);

    int updateByPrimaryKey(Bioproject record);

    List<Bioproject> selectByParentId(int i);
}