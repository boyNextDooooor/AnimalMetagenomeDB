package com.srt.pojo;

import java.util.List;

public class Gmksz {
    private Integer id;

    private String gmksz;

    private String title;

    private String label;

    private Integer parentId;

    private List<Gmksz> sons;

    private String slots;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getGmksz() {
        return gmksz;
    }

    public void setGmksz(String gmksz) {
        this.gmksz = gmksz == null ? null : gmksz.trim();
    }

    public Integer getParentId() {
        return parentId;
    }

    public void setParentId(Integer parentId) {
        this.parentId = parentId;
    }

    public List<Gmksz> getSons() {
        return sons;
    }

    public void setSons(List<Gmksz> sons) {
        this.sons = sons;
    }

    public String getSlots() {
        return slots;
    }

    public void setSlots(String slots) {
        this.slots = slots;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }
}