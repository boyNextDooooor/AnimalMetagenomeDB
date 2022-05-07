package com.srt.pojo;


import java.util.List;

public class Bioproject {
    private Integer id;

    private String bioProjectType;

    private Integer parentId;

    private List<Bioproject> sons;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getBioProjectType() {
        return bioProjectType;
    }

    public void setBioProjectType(String bioProjectType) {
        this.bioProjectType = bioProjectType == null ? null : bioProjectType.trim();
    }

    public Integer getParentId() {
        return parentId;
    }

    public void setParentId(Integer parentId) {
        this.parentId = parentId;
    }

    public List<Bioproject> getSons() {
        return sons;
    }

    public void setSons(List<Bioproject> sons) {
        this.sons = sons;
    }
}