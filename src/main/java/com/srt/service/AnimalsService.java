package com.srt.service;

import com.srt.pojo.*;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import java.util.List;

public interface AnimalsService {

    List<Animals> getInfo();

    List<Animals> getGroup();

    List<Animals> selectChangeInfo(String species, String genus, String bioprojecttype, String gang, String mu, String ke, String shu, String zhong, String sampleSite0, String sampleSite1);

    List<Animals> getGroupTypeOne();

    List<Animals> getGroupTypeTwo(String FirstClo);

    List<Animals> selectInfo(String Species);

    List<Animals> selectInfoy(String Genus);

    List<Animals> getPageInfo();

    List<Animals> selectInfoType(String FirstClo);

    List<Gmksz> getOutline();

    List<Bioproject> getBioProjectType();

    List<Animals> getOrders(String gang);

    List<Animals> selectAll(String species, String genus, String bioprojecttype, String gang, String mu, String ke, String shu, String zhong);

    List<Animals> getPageInfo(int i, int pageSize);

    long getCounts();

    List<Animals> selectChangeInfo(String species, String genus, String bioprojecttype, String gang, String mu, String ke, String shu, String zhong, int i, int pageSize);

    List<Gmksz> getTree();

    List<Animals> selectChangeInfoOrder(String species, String genus, String bioprojecttype, String gang, String mu, String ke, String shu, String zhong, String sampleSite0, String sampleSite1, String orderField, String order);

    JSONObject getSearchOptions(String species, String genus, String bioprojecttype, String gang, String mu, String ke, String shu, String zhong, String sampleSite0, String sampleSite1);
}
