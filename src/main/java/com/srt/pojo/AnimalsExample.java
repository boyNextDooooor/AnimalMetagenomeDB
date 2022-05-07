package com.srt.pojo;

import java.util.ArrayList;
import java.util.List;

public class AnimalsExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public AnimalsExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andExperimentAccessionIsNull() {
            addCriterion("Experiment_Accession is null");
            return (Criteria) this;
        }

        public Criteria andExperimentAccessionIsNotNull() {
            addCriterion("Experiment_Accession is not null");
            return (Criteria) this;
        }

        public Criteria andExperimentAccessionEqualTo(String value) {
            addCriterion("Experiment_Accession =", value, "experimentAccession");
            return (Criteria) this;
        }

        public Criteria andExperimentAccessionNotEqualTo(String value) {
            addCriterion("Experiment_Accession <>", value, "experimentAccession");
            return (Criteria) this;
        }

        public Criteria andExperimentAccessionGreaterThan(String value) {
            addCriterion("Experiment_Accession >", value, "experimentAccession");
            return (Criteria) this;
        }

        public Criteria andExperimentAccessionGreaterThanOrEqualTo(String value) {
            addCriterion("Experiment_Accession >=", value, "experimentAccession");
            return (Criteria) this;
        }

        public Criteria andExperimentAccessionLessThan(String value) {
            addCriterion("Experiment_Accession <", value, "experimentAccession");
            return (Criteria) this;
        }

        public Criteria andExperimentAccessionLessThanOrEqualTo(String value) {
            addCriterion("Experiment_Accession <=", value, "experimentAccession");
            return (Criteria) this;
        }

        public Criteria andExperimentAccessionLike(String value) {
            addCriterion("Experiment_Accession like", value, "experimentAccession");
            return (Criteria) this;
        }

        public Criteria andExperimentAccessionNotLike(String value) {
            addCriterion("Experiment_Accession not like", value, "experimentAccession");
            return (Criteria) this;
        }

        public Criteria andExperimentAccessionIn(List<String> values) {
            addCriterion("Experiment_Accession in", values, "experimentAccession");
            return (Criteria) this;
        }

        public Criteria andExperimentAccessionNotIn(List<String> values) {
            addCriterion("Experiment_Accession not in", values, "experimentAccession");
            return (Criteria) this;
        }

        public Criteria andExperimentAccessionBetween(String value1, String value2) {
            addCriterion("Experiment_Accession between", value1, value2, "experimentAccession");
            return (Criteria) this;
        }

        public Criteria andExperimentAccessionNotBetween(String value1, String value2) {
            addCriterion("Experiment_Accession not between", value1, value2, "experimentAccession");
            return (Criteria) this;
        }

        public Criteria andExperimentTitleIsNull() {
            addCriterion("Experiment_Title is null");
            return (Criteria) this;
        }

        public Criteria andExperimentTitleIsNotNull() {
            addCriterion("Experiment_Title is not null");
            return (Criteria) this;
        }

        public Criteria andExperimentTitleEqualTo(String value) {
            addCriterion("Experiment_Title =", value, "experimentTitle");
            return (Criteria) this;
        }

        public Criteria andExperimentTitleNotEqualTo(String value) {
            addCriterion("Experiment_Title <>", value, "experimentTitle");
            return (Criteria) this;
        }

        public Criteria andExperimentTitleGreaterThan(String value) {
            addCriterion("Experiment_Title >", value, "experimentTitle");
            return (Criteria) this;
        }

        public Criteria andExperimentTitleGreaterThanOrEqualTo(String value) {
            addCriterion("Experiment_Title >=", value, "experimentTitle");
            return (Criteria) this;
        }

        public Criteria andExperimentTitleLessThan(String value) {
            addCriterion("Experiment_Title <", value, "experimentTitle");
            return (Criteria) this;
        }

        public Criteria andExperimentTitleLessThanOrEqualTo(String value) {
            addCriterion("Experiment_Title <=", value, "experimentTitle");
            return (Criteria) this;
        }

        public Criteria andExperimentTitleLike(String value) {
            addCriterion("Experiment_Title like", value, "experimentTitle");
            return (Criteria) this;
        }

        public Criteria andExperimentTitleNotLike(String value) {
            addCriterion("Experiment_Title not like", value, "experimentTitle");
            return (Criteria) this;
        }

        public Criteria andExperimentTitleIn(List<String> values) {
            addCriterion("Experiment_Title in", values, "experimentTitle");
            return (Criteria) this;
        }

        public Criteria andExperimentTitleNotIn(List<String> values) {
            addCriterion("Experiment_Title not in", values, "experimentTitle");
            return (Criteria) this;
        }

        public Criteria andExperimentTitleBetween(String value1, String value2) {
            addCriterion("Experiment_Title between", value1, value2, "experimentTitle");
            return (Criteria) this;
        }

        public Criteria andExperimentTitleNotBetween(String value1, String value2) {
            addCriterion("Experiment_Title not between", value1, value2, "experimentTitle");
            return (Criteria) this;
        }

        public Criteria andOrganismNameIsNull() {
            addCriterion("Organism_Name is null");
            return (Criteria) this;
        }

        public Criteria andOrganismNameIsNotNull() {
            addCriterion("Organism_Name is not null");
            return (Criteria) this;
        }

        public Criteria andOrganismNameEqualTo(String value) {
            addCriterion("Organism_Name =", value, "organismName");
            return (Criteria) this;
        }

        public Criteria andOrganismNameNotEqualTo(String value) {
            addCriterion("Organism_Name <>", value, "organismName");
            return (Criteria) this;
        }

        public Criteria andOrganismNameGreaterThan(String value) {
            addCriterion("Organism_Name >", value, "organismName");
            return (Criteria) this;
        }

        public Criteria andOrganismNameGreaterThanOrEqualTo(String value) {
            addCriterion("Organism_Name >=", value, "organismName");
            return (Criteria) this;
        }

        public Criteria andOrganismNameLessThan(String value) {
            addCriterion("Organism_Name <", value, "organismName");
            return (Criteria) this;
        }

        public Criteria andOrganismNameLessThanOrEqualTo(String value) {
            addCriterion("Organism_Name <=", value, "organismName");
            return (Criteria) this;
        }

        public Criteria andOrganismNameLike(String value) {
            addCriterion("Organism_Name like", value, "organismName");
            return (Criteria) this;
        }

        public Criteria andOrganismNameNotLike(String value) {
            addCriterion("Organism_Name not like", value, "organismName");
            return (Criteria) this;
        }

        public Criteria andOrganismNameIn(List<String> values) {
            addCriterion("Organism_Name in", values, "organismName");
            return (Criteria) this;
        }

        public Criteria andOrganismNameNotIn(List<String> values) {
            addCriterion("Organism_Name not in", values, "organismName");
            return (Criteria) this;
        }

        public Criteria andOrganismNameBetween(String value1, String value2) {
            addCriterion("Organism_Name between", value1, value2, "organismName");
            return (Criteria) this;
        }

        public Criteria andOrganismNameNotBetween(String value1, String value2) {
            addCriterion("Organism_Name not between", value1, value2, "organismName");
            return (Criteria) this;
        }

        public Criteria andInstrumentIsNull() {
            addCriterion("Instrument is null");
            return (Criteria) this;
        }

        public Criteria andInstrumentIsNotNull() {
            addCriterion("Instrument is not null");
            return (Criteria) this;
        }

        public Criteria andInstrumentEqualTo(String value) {
            addCriterion("Instrument =", value, "instrument");
            return (Criteria) this;
        }

        public Criteria andInstrumentNotEqualTo(String value) {
            addCriterion("Instrument <>", value, "instrument");
            return (Criteria) this;
        }

        public Criteria andInstrumentGreaterThan(String value) {
            addCriterion("Instrument >", value, "instrument");
            return (Criteria) this;
        }

        public Criteria andInstrumentGreaterThanOrEqualTo(String value) {
            addCriterion("Instrument >=", value, "instrument");
            return (Criteria) this;
        }

        public Criteria andInstrumentLessThan(String value) {
            addCriterion("Instrument <", value, "instrument");
            return (Criteria) this;
        }

        public Criteria andInstrumentLessThanOrEqualTo(String value) {
            addCriterion("Instrument <=", value, "instrument");
            return (Criteria) this;
        }

        public Criteria andInstrumentLike(String value) {
            addCriterion("Instrument like", value, "instrument");
            return (Criteria) this;
        }

        public Criteria andInstrumentNotLike(String value) {
            addCriterion("Instrument not like", value, "instrument");
            return (Criteria) this;
        }

        public Criteria andInstrumentIn(List<String> values) {
            addCriterion("Instrument in", values, "instrument");
            return (Criteria) this;
        }

        public Criteria andInstrumentNotIn(List<String> values) {
            addCriterion("Instrument not in", values, "instrument");
            return (Criteria) this;
        }

        public Criteria andInstrumentBetween(String value1, String value2) {
            addCriterion("Instrument between", value1, value2, "instrument");
            return (Criteria) this;
        }

        public Criteria andInstrumentNotBetween(String value1, String value2) {
            addCriterion("Instrument not between", value1, value2, "instrument");
            return (Criteria) this;
        }

        public Criteria andSubmitterIsNull() {
            addCriterion("Submitter is null");
            return (Criteria) this;
        }

        public Criteria andSubmitterIsNotNull() {
            addCriterion("Submitter is not null");
            return (Criteria) this;
        }

        public Criteria andSubmitterEqualTo(String value) {
            addCriterion("Submitter =", value, "submitter");
            return (Criteria) this;
        }

        public Criteria andSubmitterNotEqualTo(String value) {
            addCriterion("Submitter <>", value, "submitter");
            return (Criteria) this;
        }

        public Criteria andSubmitterGreaterThan(String value) {
            addCriterion("Submitter >", value, "submitter");
            return (Criteria) this;
        }

        public Criteria andSubmitterGreaterThanOrEqualTo(String value) {
            addCriterion("Submitter >=", value, "submitter");
            return (Criteria) this;
        }

        public Criteria andSubmitterLessThan(String value) {
            addCriterion("Submitter <", value, "submitter");
            return (Criteria) this;
        }

        public Criteria andSubmitterLessThanOrEqualTo(String value) {
            addCriterion("Submitter <=", value, "submitter");
            return (Criteria) this;
        }

        public Criteria andSubmitterLike(String value) {
            addCriterion("Submitter like", value, "submitter");
            return (Criteria) this;
        }

        public Criteria andSubmitterNotLike(String value) {
            addCriterion("Submitter not like", value, "submitter");
            return (Criteria) this;
        }

        public Criteria andSubmitterIn(List<String> values) {
            addCriterion("Submitter in", values, "submitter");
            return (Criteria) this;
        }

        public Criteria andSubmitterNotIn(List<String> values) {
            addCriterion("Submitter not in", values, "submitter");
            return (Criteria) this;
        }

        public Criteria andSubmitterBetween(String value1, String value2) {
            addCriterion("Submitter between", value1, value2, "submitter");
            return (Criteria) this;
        }

        public Criteria andSubmitterNotBetween(String value1, String value2) {
            addCriterion("Submitter not between", value1, value2, "submitter");
            return (Criteria) this;
        }

        public Criteria andStudyAccessionIsNull() {
            addCriterion("Study_Accession is null");
            return (Criteria) this;
        }

        public Criteria andStudyAccessionIsNotNull() {
            addCriterion("Study_Accession is not null");
            return (Criteria) this;
        }

        public Criteria andStudyAccessionEqualTo(String value) {
            addCriterion("Study_Accession =", value, "studyAccession");
            return (Criteria) this;
        }

        public Criteria andStudyAccessionNotEqualTo(String value) {
            addCriterion("Study_Accession <>", value, "studyAccession");
            return (Criteria) this;
        }

        public Criteria andStudyAccessionGreaterThan(String value) {
            addCriterion("Study_Accession >", value, "studyAccession");
            return (Criteria) this;
        }

        public Criteria andStudyAccessionGreaterThanOrEqualTo(String value) {
            addCriterion("Study_Accession >=", value, "studyAccession");
            return (Criteria) this;
        }

        public Criteria andStudyAccessionLessThan(String value) {
            addCriterion("Study_Accession <", value, "studyAccession");
            return (Criteria) this;
        }

        public Criteria andStudyAccessionLessThanOrEqualTo(String value) {
            addCriterion("Study_Accession <=", value, "studyAccession");
            return (Criteria) this;
        }

        public Criteria andStudyAccessionLike(String value) {
            addCriterion("Study_Accession like", value, "studyAccession");
            return (Criteria) this;
        }

        public Criteria andStudyAccessionNotLike(String value) {
            addCriterion("Study_Accession not like", value, "studyAccession");
            return (Criteria) this;
        }

        public Criteria andStudyAccessionIn(List<String> values) {
            addCriterion("Study_Accession in", values, "studyAccession");
            return (Criteria) this;
        }

        public Criteria andStudyAccessionNotIn(List<String> values) {
            addCriterion("Study_Accession not in", values, "studyAccession");
            return (Criteria) this;
        }

        public Criteria andStudyAccessionBetween(String value1, String value2) {
            addCriterion("Study_Accession between", value1, value2, "studyAccession");
            return (Criteria) this;
        }

        public Criteria andStudyAccessionNotBetween(String value1, String value2) {
            addCriterion("Study_Accession not between", value1, value2, "studyAccession");
            return (Criteria) this;
        }

        public Criteria andStudyTitleIsNull() {
            addCriterion("Study_Title is null");
            return (Criteria) this;
        }

        public Criteria andStudyTitleIsNotNull() {
            addCriterion("Study_Title is not null");
            return (Criteria) this;
        }

        public Criteria andStudyTitleEqualTo(String value) {
            addCriterion("Study_Title =", value, "studyTitle");
            return (Criteria) this;
        }

        public Criteria andStudyTitleNotEqualTo(String value) {
            addCriterion("Study_Title <>", value, "studyTitle");
            return (Criteria) this;
        }

        public Criteria andStudyTitleGreaterThan(String value) {
            addCriterion("Study_Title >", value, "studyTitle");
            return (Criteria) this;
        }

        public Criteria andStudyTitleGreaterThanOrEqualTo(String value) {
            addCriterion("Study_Title >=", value, "studyTitle");
            return (Criteria) this;
        }

        public Criteria andStudyTitleLessThan(String value) {
            addCriterion("Study_Title <", value, "studyTitle");
            return (Criteria) this;
        }

        public Criteria andStudyTitleLessThanOrEqualTo(String value) {
            addCriterion("Study_Title <=", value, "studyTitle");
            return (Criteria) this;
        }

        public Criteria andStudyTitleLike(String value) {
            addCriterion("Study_Title like", value, "studyTitle");
            return (Criteria) this;
        }

        public Criteria andStudyTitleNotLike(String value) {
            addCriterion("Study_Title not like", value, "studyTitle");
            return (Criteria) this;
        }

        public Criteria andStudyTitleIn(List<String> values) {
            addCriterion("Study_Title in", values, "studyTitle");
            return (Criteria) this;
        }

        public Criteria andStudyTitleNotIn(List<String> values) {
            addCriterion("Study_Title not in", values, "studyTitle");
            return (Criteria) this;
        }

        public Criteria andStudyTitleBetween(String value1, String value2) {
            addCriterion("Study_Title between", value1, value2, "studyTitle");
            return (Criteria) this;
        }

        public Criteria andStudyTitleNotBetween(String value1, String value2) {
            addCriterion("Study_Title not between", value1, value2, "studyTitle");
            return (Criteria) this;
        }

        public Criteria andSampleAccessionIsNull() {
            addCriterion("Sample_Accession is null");
            return (Criteria) this;
        }

        public Criteria andSampleAccessionIsNotNull() {
            addCriterion("Sample_Accession is not null");
            return (Criteria) this;
        }

        public Criteria andSampleAccessionEqualTo(String value) {
            addCriterion("Sample_Accession =", value, "sampleAccession");
            return (Criteria) this;
        }

        public Criteria andSampleAccessionNotEqualTo(String value) {
            addCriterion("Sample_Accession <>", value, "sampleAccession");
            return (Criteria) this;
        }

        public Criteria andSampleAccessionGreaterThan(String value) {
            addCriterion("Sample_Accession >", value, "sampleAccession");
            return (Criteria) this;
        }

        public Criteria andSampleAccessionGreaterThanOrEqualTo(String value) {
            addCriterion("Sample_Accession >=", value, "sampleAccession");
            return (Criteria) this;
        }

        public Criteria andSampleAccessionLessThan(String value) {
            addCriterion("Sample_Accession <", value, "sampleAccession");
            return (Criteria) this;
        }

        public Criteria andSampleAccessionLessThanOrEqualTo(String value) {
            addCriterion("Sample_Accession <=", value, "sampleAccession");
            return (Criteria) this;
        }

        public Criteria andSampleAccessionLike(String value) {
            addCriterion("Sample_Accession like", value, "sampleAccession");
            return (Criteria) this;
        }

        public Criteria andSampleAccessionNotLike(String value) {
            addCriterion("Sample_Accession not like", value, "sampleAccession");
            return (Criteria) this;
        }

        public Criteria andSampleAccessionIn(List<String> values) {
            addCriterion("Sample_Accession in", values, "sampleAccession");
            return (Criteria) this;
        }

        public Criteria andSampleAccessionNotIn(List<String> values) {
            addCriterion("Sample_Accession not in", values, "sampleAccession");
            return (Criteria) this;
        }

        public Criteria andSampleAccessionBetween(String value1, String value2) {
            addCriterion("Sample_Accession between", value1, value2, "sampleAccession");
            return (Criteria) this;
        }

        public Criteria andSampleAccessionNotBetween(String value1, String value2) {
            addCriterion("Sample_Accession not between", value1, value2, "sampleAccession");
            return (Criteria) this;
        }

        public Criteria andSampleTitleIsNull() {
            addCriterion("Sample_Title is null");
            return (Criteria) this;
        }

        public Criteria andSampleTitleIsNotNull() {
            addCriterion("Sample_Title is not null");
            return (Criteria) this;
        }

        public Criteria andSampleTitleEqualTo(String value) {
            addCriterion("Sample_Title =", value, "sampleTitle");
            return (Criteria) this;
        }

        public Criteria andSampleTitleNotEqualTo(String value) {
            addCriterion("Sample_Title <>", value, "sampleTitle");
            return (Criteria) this;
        }

        public Criteria andSampleTitleGreaterThan(String value) {
            addCriterion("Sample_Title >", value, "sampleTitle");
            return (Criteria) this;
        }

        public Criteria andSampleTitleGreaterThanOrEqualTo(String value) {
            addCriterion("Sample_Title >=", value, "sampleTitle");
            return (Criteria) this;
        }

        public Criteria andSampleTitleLessThan(String value) {
            addCriterion("Sample_Title <", value, "sampleTitle");
            return (Criteria) this;
        }

        public Criteria andSampleTitleLessThanOrEqualTo(String value) {
            addCriterion("Sample_Title <=", value, "sampleTitle");
            return (Criteria) this;
        }

        public Criteria andSampleTitleLike(String value) {
            addCriterion("Sample_Title like", value, "sampleTitle");
            return (Criteria) this;
        }

        public Criteria andSampleTitleNotLike(String value) {
            addCriterion("Sample_Title not like", value, "sampleTitle");
            return (Criteria) this;
        }

        public Criteria andSampleTitleIn(List<String> values) {
            addCriterion("Sample_Title in", values, "sampleTitle");
            return (Criteria) this;
        }

        public Criteria andSampleTitleNotIn(List<String> values) {
            addCriterion("Sample_Title not in", values, "sampleTitle");
            return (Criteria) this;
        }

        public Criteria andSampleTitleBetween(String value1, String value2) {
            addCriterion("Sample_Title between", value1, value2, "sampleTitle");
            return (Criteria) this;
        }

        public Criteria andSampleTitleNotBetween(String value1, String value2) {
            addCriterion("Sample_Title not between", value1, value2, "sampleTitle");
            return (Criteria) this;
        }

        public Criteria andTotalSizeIsNull() {
            addCriterion("Total_Size is null");
            return (Criteria) this;
        }

        public Criteria andTotalSizeIsNotNull() {
            addCriterion("Total_Size is not null");
            return (Criteria) this;
        }

        public Criteria andTotalSizeEqualTo(String value) {
            addCriterion("Total_Size =", value, "totalSize");
            return (Criteria) this;
        }

        public Criteria andTotalSizeNotEqualTo(String value) {
            addCriterion("Total_Size <>", value, "totalSize");
            return (Criteria) this;
        }

        public Criteria andTotalSizeGreaterThan(String value) {
            addCriterion("Total_Size >", value, "totalSize");
            return (Criteria) this;
        }

        public Criteria andTotalSizeGreaterThanOrEqualTo(String value) {
            addCriterion("Total_Size >=", value, "totalSize");
            return (Criteria) this;
        }

        public Criteria andTotalSizeLessThan(String value) {
            addCriterion("Total_Size <", value, "totalSize");
            return (Criteria) this;
        }

        public Criteria andTotalSizeLessThanOrEqualTo(String value) {
            addCriterion("Total_Size <=", value, "totalSize");
            return (Criteria) this;
        }

        public Criteria andTotalSizeLike(String value) {
            addCriterion("Total_Size like", value, "totalSize");
            return (Criteria) this;
        }

        public Criteria andTotalSizeNotLike(String value) {
            addCriterion("Total_Size not like", value, "totalSize");
            return (Criteria) this;
        }

        public Criteria andTotalSizeIn(List<String> values) {
            addCriterion("Total_Size in", values, "totalSize");
            return (Criteria) this;
        }

        public Criteria andTotalSizeNotIn(List<String> values) {
            addCriterion("Total_Size not in", values, "totalSize");
            return (Criteria) this;
        }

        public Criteria andTotalSizeBetween(String value1, String value2) {
            addCriterion("Total_Size between", value1, value2, "totalSize");
            return (Criteria) this;
        }

        public Criteria andTotalSizeNotBetween(String value1, String value2) {
            addCriterion("Total_Size not between", value1, value2, "totalSize");
            return (Criteria) this;
        }

        public Criteria andTotalRunsIsNull() {
            addCriterion("Total_RUNs is null");
            return (Criteria) this;
        }

        public Criteria andTotalRunsIsNotNull() {
            addCriterion("Total_RUNs is not null");
            return (Criteria) this;
        }

        public Criteria andTotalRunsEqualTo(String value) {
            addCriterion("Total_RUNs =", value, "totalRuns");
            return (Criteria) this;
        }

        public Criteria andTotalRunsNotEqualTo(String value) {
            addCriterion("Total_RUNs <>", value, "totalRuns");
            return (Criteria) this;
        }

        public Criteria andTotalRunsGreaterThan(String value) {
            addCriterion("Total_RUNs >", value, "totalRuns");
            return (Criteria) this;
        }

        public Criteria andTotalRunsGreaterThanOrEqualTo(String value) {
            addCriterion("Total_RUNs >=", value, "totalRuns");
            return (Criteria) this;
        }

        public Criteria andTotalRunsLessThan(String value) {
            addCriterion("Total_RUNs <", value, "totalRuns");
            return (Criteria) this;
        }

        public Criteria andTotalRunsLessThanOrEqualTo(String value) {
            addCriterion("Total_RUNs <=", value, "totalRuns");
            return (Criteria) this;
        }

        public Criteria andTotalRunsLike(String value) {
            addCriterion("Total_RUNs like", value, "totalRuns");
            return (Criteria) this;
        }

        public Criteria andTotalRunsNotLike(String value) {
            addCriterion("Total_RUNs not like", value, "totalRuns");
            return (Criteria) this;
        }

        public Criteria andTotalRunsIn(List<String> values) {
            addCriterion("Total_RUNs in", values, "totalRuns");
            return (Criteria) this;
        }

        public Criteria andTotalRunsNotIn(List<String> values) {
            addCriterion("Total_RUNs not in", values, "totalRuns");
            return (Criteria) this;
        }

        public Criteria andTotalRunsBetween(String value1, String value2) {
            addCriterion("Total_RUNs between", value1, value2, "totalRuns");
            return (Criteria) this;
        }

        public Criteria andTotalRunsNotBetween(String value1, String value2) {
            addCriterion("Total_RUNs not between", value1, value2, "totalRuns");
            return (Criteria) this;
        }

        public Criteria andTotalSpotsIsNull() {
            addCriterion("Total_Spots is null");
            return (Criteria) this;
        }

        public Criteria andTotalSpotsIsNotNull() {
            addCriterion("Total_Spots is not null");
            return (Criteria) this;
        }

        public Criteria andTotalSpotsEqualTo(String value) {
            addCriterion("Total_Spots =", value, "totalSpots");
            return (Criteria) this;
        }

        public Criteria andTotalSpotsNotEqualTo(String value) {
            addCriterion("Total_Spots <>", value, "totalSpots");
            return (Criteria) this;
        }

        public Criteria andTotalSpotsGreaterThan(String value) {
            addCriterion("Total_Spots >", value, "totalSpots");
            return (Criteria) this;
        }

        public Criteria andTotalSpotsGreaterThanOrEqualTo(String value) {
            addCriterion("Total_Spots >=", value, "totalSpots");
            return (Criteria) this;
        }

        public Criteria andTotalSpotsLessThan(String value) {
            addCriterion("Total_Spots <", value, "totalSpots");
            return (Criteria) this;
        }

        public Criteria andTotalSpotsLessThanOrEqualTo(String value) {
            addCriterion("Total_Spots <=", value, "totalSpots");
            return (Criteria) this;
        }

        public Criteria andTotalSpotsLike(String value) {
            addCriterion("Total_Spots like", value, "totalSpots");
            return (Criteria) this;
        }

        public Criteria andTotalSpotsNotLike(String value) {
            addCriterion("Total_Spots not like", value, "totalSpots");
            return (Criteria) this;
        }

        public Criteria andTotalSpotsIn(List<String> values) {
            addCriterion("Total_Spots in", values, "totalSpots");
            return (Criteria) this;
        }

        public Criteria andTotalSpotsNotIn(List<String> values) {
            addCriterion("Total_Spots not in", values, "totalSpots");
            return (Criteria) this;
        }

        public Criteria andTotalSpotsBetween(String value1, String value2) {
            addCriterion("Total_Spots between", value1, value2, "totalSpots");
            return (Criteria) this;
        }

        public Criteria andTotalSpotsNotBetween(String value1, String value2) {
            addCriterion("Total_Spots not between", value1, value2, "totalSpots");
            return (Criteria) this;
        }

        public Criteria andTotalBasesIsNull() {
            addCriterion("Total_Bases is null");
            return (Criteria) this;
        }

        public Criteria andTotalBasesIsNotNull() {
            addCriterion("Total_Bases is not null");
            return (Criteria) this;
        }

        public Criteria andTotalBasesEqualTo(String value) {
            addCriterion("Total_Bases =", value, "totalBases");
            return (Criteria) this;
        }

        public Criteria andTotalBasesNotEqualTo(String value) {
            addCriterion("Total_Bases <>", value, "totalBases");
            return (Criteria) this;
        }

        public Criteria andTotalBasesGreaterThan(String value) {
            addCriterion("Total_Bases >", value, "totalBases");
            return (Criteria) this;
        }

        public Criteria andTotalBasesGreaterThanOrEqualTo(String value) {
            addCriterion("Total_Bases >=", value, "totalBases");
            return (Criteria) this;
        }

        public Criteria andTotalBasesLessThan(String value) {
            addCriterion("Total_Bases <", value, "totalBases");
            return (Criteria) this;
        }

        public Criteria andTotalBasesLessThanOrEqualTo(String value) {
            addCriterion("Total_Bases <=", value, "totalBases");
            return (Criteria) this;
        }

        public Criteria andTotalBasesLike(String value) {
            addCriterion("Total_Bases like", value, "totalBases");
            return (Criteria) this;
        }

        public Criteria andTotalBasesNotLike(String value) {
            addCriterion("Total_Bases not like", value, "totalBases");
            return (Criteria) this;
        }

        public Criteria andTotalBasesIn(List<String> values) {
            addCriterion("Total_Bases in", values, "totalBases");
            return (Criteria) this;
        }

        public Criteria andTotalBasesNotIn(List<String> values) {
            addCriterion("Total_Bases not in", values, "totalBases");
            return (Criteria) this;
        }

        public Criteria andTotalBasesBetween(String value1, String value2) {
            addCriterion("Total_Bases between", value1, value2, "totalBases");
            return (Criteria) this;
        }

        public Criteria andTotalBasesNotBetween(String value1, String value2) {
            addCriterion("Total_Bases not between", value1, value2, "totalBases");
            return (Criteria) this;
        }

        public Criteria andSampleNameIsNull() {
            addCriterion("Sample_Name is null");
            return (Criteria) this;
        }

        public Criteria andSampleNameIsNotNull() {
            addCriterion("Sample_Name is not null");
            return (Criteria) this;
        }

        public Criteria andSampleNameEqualTo(String value) {
            addCriterion("Sample_Name =", value, "sampleName");
            return (Criteria) this;
        }

        public Criteria andSampleNameNotEqualTo(String value) {
            addCriterion("Sample_Name <>", value, "sampleName");
            return (Criteria) this;
        }

        public Criteria andSampleNameGreaterThan(String value) {
            addCriterion("Sample_Name >", value, "sampleName");
            return (Criteria) this;
        }

        public Criteria andSampleNameGreaterThanOrEqualTo(String value) {
            addCriterion("Sample_Name >=", value, "sampleName");
            return (Criteria) this;
        }

        public Criteria andSampleNameLessThan(String value) {
            addCriterion("Sample_Name <", value, "sampleName");
            return (Criteria) this;
        }

        public Criteria andSampleNameLessThanOrEqualTo(String value) {
            addCriterion("Sample_Name <=", value, "sampleName");
            return (Criteria) this;
        }

        public Criteria andSampleNameLike(String value) {
            addCriterion("Sample_Name like", value, "sampleName");
            return (Criteria) this;
        }

        public Criteria andSampleNameNotLike(String value) {
            addCriterion("Sample_Name not like", value, "sampleName");
            return (Criteria) this;
        }

        public Criteria andSampleNameIn(List<String> values) {
            addCriterion("Sample_Name in", values, "sampleName");
            return (Criteria) this;
        }

        public Criteria andSampleNameNotIn(List<String> values) {
            addCriterion("Sample_Name not in", values, "sampleName");
            return (Criteria) this;
        }

        public Criteria andSampleNameBetween(String value1, String value2) {
            addCriterion("Sample_Name between", value1, value2, "sampleName");
            return (Criteria) this;
        }

        public Criteria andSampleNameNotBetween(String value1, String value2) {
            addCriterion("Sample_Name not between", value1, value2, "sampleName");
            return (Criteria) this;
        }

        public Criteria andLibraryStrategyIsNull() {
            addCriterion("Library_Strategy is null");
            return (Criteria) this;
        }

        public Criteria andLibraryStrategyIsNotNull() {
            addCriterion("Library_Strategy is not null");
            return (Criteria) this;
        }

        public Criteria andLibraryStrategyEqualTo(String value) {
            addCriterion("Library_Strategy =", value, "libraryStrategy");
            return (Criteria) this;
        }

        public Criteria andLibraryStrategyNotEqualTo(String value) {
            addCriterion("Library_Strategy <>", value, "libraryStrategy");
            return (Criteria) this;
        }

        public Criteria andLibraryStrategyGreaterThan(String value) {
            addCriterion("Library_Strategy >", value, "libraryStrategy");
            return (Criteria) this;
        }

        public Criteria andLibraryStrategyGreaterThanOrEqualTo(String value) {
            addCriterion("Library_Strategy >=", value, "libraryStrategy");
            return (Criteria) this;
        }

        public Criteria andLibraryStrategyLessThan(String value) {
            addCriterion("Library_Strategy <", value, "libraryStrategy");
            return (Criteria) this;
        }

        public Criteria andLibraryStrategyLessThanOrEqualTo(String value) {
            addCriterion("Library_Strategy <=", value, "libraryStrategy");
            return (Criteria) this;
        }

        public Criteria andLibraryStrategyLike(String value) {
            addCriterion("Library_Strategy like", value, "libraryStrategy");
            return (Criteria) this;
        }

        public Criteria andLibraryStrategyNotLike(String value) {
            addCriterion("Library_Strategy not like", value, "libraryStrategy");
            return (Criteria) this;
        }

        public Criteria andLibraryStrategyIn(List<String> values) {
            addCriterion("Library_Strategy in", values, "libraryStrategy");
            return (Criteria) this;
        }

        public Criteria andLibraryStrategyNotIn(List<String> values) {
            addCriterion("Library_Strategy not in", values, "libraryStrategy");
            return (Criteria) this;
        }

        public Criteria andLibraryStrategyBetween(String value1, String value2) {
            addCriterion("Library_Strategy between", value1, value2, "libraryStrategy");
            return (Criteria) this;
        }

        public Criteria andLibraryStrategyNotBetween(String value1, String value2) {
            addCriterion("Library_Strategy not between", value1, value2, "libraryStrategy");
            return (Criteria) this;
        }

        public Criteria andLibrarySourceIsNull() {
            addCriterion("Library_Source is null");
            return (Criteria) this;
        }

        public Criteria andLibrarySourceIsNotNull() {
            addCriterion("Library_Source is not null");
            return (Criteria) this;
        }

        public Criteria andLibrarySourceEqualTo(String value) {
            addCriterion("Library_Source =", value, "librarySource");
            return (Criteria) this;
        }

        public Criteria andLibrarySourceNotEqualTo(String value) {
            addCriterion("Library_Source <>", value, "librarySource");
            return (Criteria) this;
        }

        public Criteria andLibrarySourceGreaterThan(String value) {
            addCriterion("Library_Source >", value, "librarySource");
            return (Criteria) this;
        }

        public Criteria andLibrarySourceGreaterThanOrEqualTo(String value) {
            addCriterion("Library_Source >=", value, "librarySource");
            return (Criteria) this;
        }

        public Criteria andLibrarySourceLessThan(String value) {
            addCriterion("Library_Source <", value, "librarySource");
            return (Criteria) this;
        }

        public Criteria andLibrarySourceLessThanOrEqualTo(String value) {
            addCriterion("Library_Source <=", value, "librarySource");
            return (Criteria) this;
        }

        public Criteria andLibrarySourceLike(String value) {
            addCriterion("Library_Source like", value, "librarySource");
            return (Criteria) this;
        }

        public Criteria andLibrarySourceNotLike(String value) {
            addCriterion("Library_Source not like", value, "librarySource");
            return (Criteria) this;
        }

        public Criteria andLibrarySourceIn(List<String> values) {
            addCriterion("Library_Source in", values, "librarySource");
            return (Criteria) this;
        }

        public Criteria andLibrarySourceNotIn(List<String> values) {
            addCriterion("Library_Source not in", values, "librarySource");
            return (Criteria) this;
        }

        public Criteria andLibrarySourceBetween(String value1, String value2) {
            addCriterion("Library_Source between", value1, value2, "librarySource");
            return (Criteria) this;
        }

        public Criteria andLibrarySourceNotBetween(String value1, String value2) {
            addCriterion("Library_Source not between", value1, value2, "librarySource");
            return (Criteria) this;
        }

        public Criteria andLibrarySelectionIsNull() {
            addCriterion("Library_Selection is null");
            return (Criteria) this;
        }

        public Criteria andLibrarySelectionIsNotNull() {
            addCriterion("Library_Selection is not null");
            return (Criteria) this;
        }

        public Criteria andLibrarySelectionEqualTo(String value) {
            addCriterion("Library_Selection =", value, "librarySelection");
            return (Criteria) this;
        }

        public Criteria andLibrarySelectionNotEqualTo(String value) {
            addCriterion("Library_Selection <>", value, "librarySelection");
            return (Criteria) this;
        }

        public Criteria andLibrarySelectionGreaterThan(String value) {
            addCriterion("Library_Selection >", value, "librarySelection");
            return (Criteria) this;
        }

        public Criteria andLibrarySelectionGreaterThanOrEqualTo(String value) {
            addCriterion("Library_Selection >=", value, "librarySelection");
            return (Criteria) this;
        }

        public Criteria andLibrarySelectionLessThan(String value) {
            addCriterion("Library_Selection <", value, "librarySelection");
            return (Criteria) this;
        }

        public Criteria andLibrarySelectionLessThanOrEqualTo(String value) {
            addCriterion("Library_Selection <=", value, "librarySelection");
            return (Criteria) this;
        }

        public Criteria andLibrarySelectionLike(String value) {
            addCriterion("Library_Selection like", value, "librarySelection");
            return (Criteria) this;
        }

        public Criteria andLibrarySelectionNotLike(String value) {
            addCriterion("Library_Selection not like", value, "librarySelection");
            return (Criteria) this;
        }

        public Criteria andLibrarySelectionIn(List<String> values) {
            addCriterion("Library_Selection in", values, "librarySelection");
            return (Criteria) this;
        }

        public Criteria andLibrarySelectionNotIn(List<String> values) {
            addCriterion("Library_Selection not in", values, "librarySelection");
            return (Criteria) this;
        }

        public Criteria andLibrarySelectionBetween(String value1, String value2) {
            addCriterion("Library_Selection between", value1, value2, "librarySelection");
            return (Criteria) this;
        }

        public Criteria andLibrarySelectionNotBetween(String value1, String value2) {
            addCriterion("Library_Selection not between", value1, value2, "librarySelection");
            return (Criteria) this;
        }

        public Criteria andBioprojectAccessionIsNull() {
            addCriterion("Bioproject_Accession is null");
            return (Criteria) this;
        }

        public Criteria andBioprojectAccessionIsNotNull() {
            addCriterion("Bioproject_Accession is not null");
            return (Criteria) this;
        }

        public Criteria andBioprojectAccessionEqualTo(String value) {
            addCriterion("Bioproject_Accession =", value, "bioprojectAccession");
            return (Criteria) this;
        }

        public Criteria andBioprojectAccessionNotEqualTo(String value) {
            addCriterion("Bioproject_Accession <>", value, "bioprojectAccession");
            return (Criteria) this;
        }

        public Criteria andBioprojectAccessionGreaterThan(String value) {
            addCriterion("Bioproject_Accession >", value, "bioprojectAccession");
            return (Criteria) this;
        }

        public Criteria andBioprojectAccessionGreaterThanOrEqualTo(String value) {
            addCriterion("Bioproject_Accession >=", value, "bioprojectAccession");
            return (Criteria) this;
        }

        public Criteria andBioprojectAccessionLessThan(String value) {
            addCriterion("Bioproject_Accession <", value, "bioprojectAccession");
            return (Criteria) this;
        }

        public Criteria andBioprojectAccessionLessThanOrEqualTo(String value) {
            addCriterion("Bioproject_Accession <=", value, "bioprojectAccession");
            return (Criteria) this;
        }

        public Criteria andBioprojectAccessionLike(String value) {
            addCriterion("Bioproject_Accession like", value, "bioprojectAccession");
            return (Criteria) this;
        }

        public Criteria andBioprojectAccessionNotLike(String value) {
            addCriterion("Bioproject_Accession not like", value, "bioprojectAccession");
            return (Criteria) this;
        }

        public Criteria andBioprojectAccessionIn(List<String> values) {
            addCriterion("Bioproject_Accession in", values, "bioprojectAccession");
            return (Criteria) this;
        }

        public Criteria andBioprojectAccessionNotIn(List<String> values) {
            addCriterion("Bioproject_Accession not in", values, "bioprojectAccession");
            return (Criteria) this;
        }

        public Criteria andBioprojectAccessionBetween(String value1, String value2) {
            addCriterion("Bioproject_Accession between", value1, value2, "bioprojectAccession");
            return (Criteria) this;
        }

        public Criteria andBioprojectAccessionNotBetween(String value1, String value2) {
            addCriterion("Bioproject_Accession not between", value1, value2, "bioprojectAccession");
            return (Criteria) this;
        }

        public Criteria andBiosampleAccessionIsNull() {
            addCriterion("BioSample_Accession is null");
            return (Criteria) this;
        }

        public Criteria andBiosampleAccessionIsNotNull() {
            addCriterion("BioSample_Accession is not null");
            return (Criteria) this;
        }

        public Criteria andBiosampleAccessionEqualTo(String value) {
            addCriterion("BioSample_Accession =", value, "biosampleAccession");
            return (Criteria) this;
        }

        public Criteria andBiosampleAccessionNotEqualTo(String value) {
            addCriterion("BioSample_Accession <>", value, "biosampleAccession");
            return (Criteria) this;
        }

        public Criteria andBiosampleAccessionGreaterThan(String value) {
            addCriterion("BioSample_Accession >", value, "biosampleAccession");
            return (Criteria) this;
        }

        public Criteria andBiosampleAccessionGreaterThanOrEqualTo(String value) {
            addCriterion("BioSample_Accession >=", value, "biosampleAccession");
            return (Criteria) this;
        }

        public Criteria andBiosampleAccessionLessThan(String value) {
            addCriterion("BioSample_Accession <", value, "biosampleAccession");
            return (Criteria) this;
        }

        public Criteria andBiosampleAccessionLessThanOrEqualTo(String value) {
            addCriterion("BioSample_Accession <=", value, "biosampleAccession");
            return (Criteria) this;
        }

        public Criteria andBiosampleAccessionLike(String value) {
            addCriterion("BioSample_Accession like", value, "biosampleAccession");
            return (Criteria) this;
        }

        public Criteria andBiosampleAccessionNotLike(String value) {
            addCriterion("BioSample_Accession not like", value, "biosampleAccession");
            return (Criteria) this;
        }

        public Criteria andBiosampleAccessionIn(List<String> values) {
            addCriterion("BioSample_Accession in", values, "biosampleAccession");
            return (Criteria) this;
        }

        public Criteria andBiosampleAccessionNotIn(List<String> values) {
            addCriterion("BioSample_Accession not in", values, "biosampleAccession");
            return (Criteria) this;
        }

        public Criteria andBiosampleAccessionBetween(String value1, String value2) {
            addCriterion("BioSample_Accession between", value1, value2, "biosampleAccession");
            return (Criteria) this;
        }

        public Criteria andBiosampleAccessionNotBetween(String value1, String value2) {
            addCriterion("BioSample_Accession not between", value1, value2, "biosampleAccession");
            return (Criteria) this;
        }

        public Criteria andSampleSite1IsNull() {
            addCriterion("Sample_site1 is null");
            return (Criteria) this;
        }

        public Criteria andSampleSite1IsNotNull() {
            addCriterion("Sample_site1 is not null");
            return (Criteria) this;
        }

        public Criteria andSampleSite1EqualTo(String value) {
            addCriterion("Sample_site1 =", value, "sampleSite1");
            return (Criteria) this;
        }

        public Criteria andSampleSite1NotEqualTo(String value) {
            addCriterion("Sample_site1 <>", value, "sampleSite1");
            return (Criteria) this;
        }

        public Criteria andSampleSite1GreaterThan(String value) {
            addCriterion("Sample_site1 >", value, "sampleSite1");
            return (Criteria) this;
        }

        public Criteria andSampleSite1GreaterThanOrEqualTo(String value) {
            addCriterion("Sample_site1 >=", value, "sampleSite1");
            return (Criteria) this;
        }

        public Criteria andSampleSite1LessThan(String value) {
            addCriterion("Sample_site1 <", value, "sampleSite1");
            return (Criteria) this;
        }

        public Criteria andSampleSite1LessThanOrEqualTo(String value) {
            addCriterion("Sample_site1 <=", value, "sampleSite1");
            return (Criteria) this;
        }

        public Criteria andSampleSite1Like(String value) {
            addCriterion("Sample_site1 like", value, "sampleSite1");
            return (Criteria) this;
        }

        public Criteria andSampleSite1NotLike(String value) {
            addCriterion("Sample_site1 not like", value, "sampleSite1");
            return (Criteria) this;
        }

        public Criteria andSampleSite1In(List<String> values) {
            addCriterion("Sample_site1 in", values, "sampleSite1");
            return (Criteria) this;
        }

        public Criteria andSampleSite1NotIn(List<String> values) {
            addCriterion("Sample_site1 not in", values, "sampleSite1");
            return (Criteria) this;
        }

        public Criteria andSampleSite1Between(String value1, String value2) {
            addCriterion("Sample_site1 between", value1, value2, "sampleSite1");
            return (Criteria) this;
        }

        public Criteria andSampleSite1NotBetween(String value1, String value2) {
            addCriterion("Sample_site1 not between", value1, value2, "sampleSite1");
            return (Criteria) this;
        }

        public Criteria andSampleSite2IsNull() {
            addCriterion("Sample_site2 is null");
            return (Criteria) this;
        }

        public Criteria andSampleSite2IsNotNull() {
            addCriterion("Sample_site2 is not null");
            return (Criteria) this;
        }

        public Criteria andSampleSite2EqualTo(String value) {
            addCriterion("Sample_site2 =", value, "sampleSite2");
            return (Criteria) this;
        }

        public Criteria andSampleSite2NotEqualTo(String value) {
            addCriterion("Sample_site2 <>", value, "sampleSite2");
            return (Criteria) this;
        }

        public Criteria andSampleSite2GreaterThan(String value) {
            addCriterion("Sample_site2 >", value, "sampleSite2");
            return (Criteria) this;
        }

        public Criteria andSampleSite2GreaterThanOrEqualTo(String value) {
            addCriterion("Sample_site2 >=", value, "sampleSite2");
            return (Criteria) this;
        }

        public Criteria andSampleSite2LessThan(String value) {
            addCriterion("Sample_site2 <", value, "sampleSite2");
            return (Criteria) this;
        }

        public Criteria andSampleSite2LessThanOrEqualTo(String value) {
            addCriterion("Sample_site2 <=", value, "sampleSite2");
            return (Criteria) this;
        }

        public Criteria andSampleSite2Like(String value) {
            addCriterion("Sample_site2 like", value, "sampleSite2");
            return (Criteria) this;
        }

        public Criteria andSampleSite2NotLike(String value) {
            addCriterion("Sample_site2 not like", value, "sampleSite2");
            return (Criteria) this;
        }

        public Criteria andSampleSite2In(List<String> values) {
            addCriterion("Sample_site2 in", values, "sampleSite2");
            return (Criteria) this;
        }

        public Criteria andSampleSite2NotIn(List<String> values) {
            addCriterion("Sample_site2 not in", values, "sampleSite2");
            return (Criteria) this;
        }

        public Criteria andSampleSite2Between(String value1, String value2) {
            addCriterion("Sample_site2 between", value1, value2, "sampleSite2");
            return (Criteria) this;
        }

        public Criteria andSampleSite2NotBetween(String value1, String value2) {
            addCriterion("Sample_site2 not between", value1, value2, "sampleSite2");
            return (Criteria) this;
        }

        public Criteria andSexIsNull() {
            addCriterion("Sex is null");
            return (Criteria) this;
        }

        public Criteria andSexIsNotNull() {
            addCriterion("Sex is not null");
            return (Criteria) this;
        }

        public Criteria andSexEqualTo(String value) {
            addCriterion("Sex =", value, "sex");
            return (Criteria) this;
        }

        public Criteria andSexNotEqualTo(String value) {
            addCriterion("Sex <>", value, "sex");
            return (Criteria) this;
        }

        public Criteria andSexGreaterThan(String value) {
            addCriterion("Sex >", value, "sex");
            return (Criteria) this;
        }

        public Criteria andSexGreaterThanOrEqualTo(String value) {
            addCriterion("Sex >=", value, "sex");
            return (Criteria) this;
        }

        public Criteria andSexLessThan(String value) {
            addCriterion("Sex <", value, "sex");
            return (Criteria) this;
        }

        public Criteria andSexLessThanOrEqualTo(String value) {
            addCriterion("Sex <=", value, "sex");
            return (Criteria) this;
        }

        public Criteria andSexLike(String value) {
            addCriterion("Sex like", value, "sex");
            return (Criteria) this;
        }

        public Criteria andSexNotLike(String value) {
            addCriterion("Sex not like", value, "sex");
            return (Criteria) this;
        }

        public Criteria andSexIn(List<String> values) {
            addCriterion("Sex in", values, "sex");
            return (Criteria) this;
        }

        public Criteria andSexNotIn(List<String> values) {
            addCriterion("Sex not in", values, "sex");
            return (Criteria) this;
        }

        public Criteria andSexBetween(String value1, String value2) {
            addCriterion("Sex between", value1, value2, "sex");
            return (Criteria) this;
        }

        public Criteria andSexNotBetween(String value1, String value2) {
            addCriterion("Sex not between", value1, value2, "sex");
            return (Criteria) this;
        }

        public Criteria andAgeIsNull() {
            addCriterion("Age is null");
            return (Criteria) this;
        }

        public Criteria andAgeIsNotNull() {
            addCriterion("Age is not null");
            return (Criteria) this;
        }

        public Criteria andAgeEqualTo(String value) {
            addCriterion("Age =", value, "age");
            return (Criteria) this;
        }

        public Criteria andAgeNotEqualTo(String value) {
            addCriterion("Age <>", value, "age");
            return (Criteria) this;
        }

        public Criteria andAgeGreaterThan(String value) {
            addCriterion("Age >", value, "age");
            return (Criteria) this;
        }

        public Criteria andAgeGreaterThanOrEqualTo(String value) {
            addCriterion("Age >=", value, "age");
            return (Criteria) this;
        }

        public Criteria andAgeLessThan(String value) {
            addCriterion("Age <", value, "age");
            return (Criteria) this;
        }

        public Criteria andAgeLessThanOrEqualTo(String value) {
            addCriterion("Age <=", value, "age");
            return (Criteria) this;
        }

        public Criteria andAgeLike(String value) {
            addCriterion("Age like", value, "age");
            return (Criteria) this;
        }

        public Criteria andAgeNotLike(String value) {
            addCriterion("Age not like", value, "age");
            return (Criteria) this;
        }

        public Criteria andAgeIn(List<String> values) {
            addCriterion("Age in", values, "age");
            return (Criteria) this;
        }

        public Criteria andAgeNotIn(List<String> values) {
            addCriterion("Age not in", values, "age");
            return (Criteria) this;
        }

        public Criteria andAgeBetween(String value1, String value2) {
            addCriterion("Age between", value1, value2, "age");
            return (Criteria) this;
        }

        public Criteria andAgeNotBetween(String value1, String value2) {
            addCriterion("Age not between", value1, value2, "age");
            return (Criteria) this;
        }

        public Criteria andCreationDateIsNull() {
            addCriterion("Creation_date is null");
            return (Criteria) this;
        }

        public Criteria andCreationDateIsNotNull() {
            addCriterion("Creation_date is not null");
            return (Criteria) this;
        }

        public Criteria andCreationDateEqualTo(String value) {
            addCriterion("Creation_date =", value, "creationDate");
            return (Criteria) this;
        }

        public Criteria andCreationDateNotEqualTo(String value) {
            addCriterion("Creation_date <>", value, "creationDate");
            return (Criteria) this;
        }

        public Criteria andCreationDateGreaterThan(String value) {
            addCriterion("Creation_date >", value, "creationDate");
            return (Criteria) this;
        }

        public Criteria andCreationDateGreaterThanOrEqualTo(String value) {
            addCriterion("Creation_date >=", value, "creationDate");
            return (Criteria) this;
        }

        public Criteria andCreationDateLessThan(String value) {
            addCriterion("Creation_date <", value, "creationDate");
            return (Criteria) this;
        }

        public Criteria andCreationDateLessThanOrEqualTo(String value) {
            addCriterion("Creation_date <=", value, "creationDate");
            return (Criteria) this;
        }

        public Criteria andCreationDateLike(String value) {
            addCriterion("Creation_date like", value, "creationDate");
            return (Criteria) this;
        }

        public Criteria andCreationDateNotLike(String value) {
            addCriterion("Creation_date not like", value, "creationDate");
            return (Criteria) this;
        }

        public Criteria andCreationDateIn(List<String> values) {
            addCriterion("Creation_date in", values, "creationDate");
            return (Criteria) this;
        }

        public Criteria andCreationDateNotIn(List<String> values) {
            addCriterion("Creation_date not in", values, "creationDate");
            return (Criteria) this;
        }

        public Criteria andCreationDateBetween(String value1, String value2) {
            addCriterion("Creation_date between", value1, value2, "creationDate");
            return (Criteria) this;
        }

        public Criteria andCreationDateNotBetween(String value1, String value2) {
            addCriterion("Creation_date not between", value1, value2, "creationDate");
            return (Criteria) this;
        }

        public Criteria andCollectionDateIsNull() {
            addCriterion("Collection_date is null");
            return (Criteria) this;
        }

        public Criteria andCollectionDateIsNotNull() {
            addCriterion("Collection_date is not null");
            return (Criteria) this;
        }

        public Criteria andCollectionDateEqualTo(String value) {
            addCriterion("Collection_date =", value, "collectionDate");
            return (Criteria) this;
        }

        public Criteria andCollectionDateNotEqualTo(String value) {
            addCriterion("Collection_date <>", value, "collectionDate");
            return (Criteria) this;
        }

        public Criteria andCollectionDateGreaterThan(String value) {
            addCriterion("Collection_date >", value, "collectionDate");
            return (Criteria) this;
        }

        public Criteria andCollectionDateGreaterThanOrEqualTo(String value) {
            addCriterion("Collection_date >=", value, "collectionDate");
            return (Criteria) this;
        }

        public Criteria andCollectionDateLessThan(String value) {
            addCriterion("Collection_date <", value, "collectionDate");
            return (Criteria) this;
        }

        public Criteria andCollectionDateLessThanOrEqualTo(String value) {
            addCriterion("Collection_date <=", value, "collectionDate");
            return (Criteria) this;
        }

        public Criteria andCollectionDateLike(String value) {
            addCriterion("Collection_date like", value, "collectionDate");
            return (Criteria) this;
        }

        public Criteria andCollectionDateNotLike(String value) {
            addCriterion("Collection_date not like", value, "collectionDate");
            return (Criteria) this;
        }

        public Criteria andCollectionDateIn(List<String> values) {
            addCriterion("Collection_date in", values, "collectionDate");
            return (Criteria) this;
        }

        public Criteria andCollectionDateNotIn(List<String> values) {
            addCriterion("Collection_date not in", values, "collectionDate");
            return (Criteria) this;
        }

        public Criteria andCollectionDateBetween(String value1, String value2) {
            addCriterion("Collection_date between", value1, value2, "collectionDate");
            return (Criteria) this;
        }

        public Criteria andCollectionDateNotBetween(String value1, String value2) {
            addCriterion("Collection_date not between", value1, value2, "collectionDate");
            return (Criteria) this;
        }

        public Criteria andGeographicLocationIsNull() {
            addCriterion("Geographic_location is null");
            return (Criteria) this;
        }

        public Criteria andGeographicLocationIsNotNull() {
            addCriterion("Geographic_location is not null");
            return (Criteria) this;
        }

        public Criteria andGeographicLocationEqualTo(String value) {
            addCriterion("Geographic_location =", value, "geographicLocation");
            return (Criteria) this;
        }

        public Criteria andGeographicLocationNotEqualTo(String value) {
            addCriterion("Geographic_location <>", value, "geographicLocation");
            return (Criteria) this;
        }

        public Criteria andGeographicLocationGreaterThan(String value) {
            addCriterion("Geographic_location >", value, "geographicLocation");
            return (Criteria) this;
        }

        public Criteria andGeographicLocationGreaterThanOrEqualTo(String value) {
            addCriterion("Geographic_location >=", value, "geographicLocation");
            return (Criteria) this;
        }

        public Criteria andGeographicLocationLessThan(String value) {
            addCriterion("Geographic_location <", value, "geographicLocation");
            return (Criteria) this;
        }

        public Criteria andGeographicLocationLessThanOrEqualTo(String value) {
            addCriterion("Geographic_location <=", value, "geographicLocation");
            return (Criteria) this;
        }

        public Criteria andGeographicLocationLike(String value) {
            addCriterion("Geographic_location like", value, "geographicLocation");
            return (Criteria) this;
        }

        public Criteria andGeographicLocationNotLike(String value) {
            addCriterion("Geographic_location not like", value, "geographicLocation");
            return (Criteria) this;
        }

        public Criteria andGeographicLocationIn(List<String> values) {
            addCriterion("Geographic_location in", values, "geographicLocation");
            return (Criteria) this;
        }

        public Criteria andGeographicLocationNotIn(List<String> values) {
            addCriterion("Geographic_location not in", values, "geographicLocation");
            return (Criteria) this;
        }

        public Criteria andGeographicLocationBetween(String value1, String value2) {
            addCriterion("Geographic_location between", value1, value2, "geographicLocation");
            return (Criteria) this;
        }

        public Criteria andGeographicLocationNotBetween(String value1, String value2) {
            addCriterion("Geographic_location not between", value1, value2, "geographicLocation");
            return (Criteria) this;
        }

        public Criteria andLatitudeIsNull() {
            addCriterion("Latitude is null");
            return (Criteria) this;
        }

        public Criteria andLatitudeIsNotNull() {
            addCriterion("Latitude is not null");
            return (Criteria) this;
        }

        public Criteria andLatitudeEqualTo(String value) {
            addCriterion("Latitude =", value, "latitude");
            return (Criteria) this;
        }

        public Criteria andLatitudeNotEqualTo(String value) {
            addCriterion("Latitude <>", value, "latitude");
            return (Criteria) this;
        }

        public Criteria andLatitudeGreaterThan(String value) {
            addCriterion("Latitude >", value, "latitude");
            return (Criteria) this;
        }

        public Criteria andLatitudeGreaterThanOrEqualTo(String value) {
            addCriterion("Latitude >=", value, "latitude");
            return (Criteria) this;
        }

        public Criteria andLatitudeLessThan(String value) {
            addCriterion("Latitude <", value, "latitude");
            return (Criteria) this;
        }

        public Criteria andLatitudeLessThanOrEqualTo(String value) {
            addCriterion("Latitude <=", value, "latitude");
            return (Criteria) this;
        }

        public Criteria andLatitudeLike(String value) {
            addCriterion("Latitude like", value, "latitude");
            return (Criteria) this;
        }

        public Criteria andLatitudeNotLike(String value) {
            addCriterion("Latitude not like", value, "latitude");
            return (Criteria) this;
        }

        public Criteria andLatitudeIn(List<String> values) {
            addCriterion("Latitude in", values, "latitude");
            return (Criteria) this;
        }

        public Criteria andLatitudeNotIn(List<String> values) {
            addCriterion("Latitude not in", values, "latitude");
            return (Criteria) this;
        }

        public Criteria andLatitudeBetween(String value1, String value2) {
            addCriterion("Latitude between", value1, value2, "latitude");
            return (Criteria) this;
        }

        public Criteria andLatitudeNotBetween(String value1, String value2) {
            addCriterion("Latitude not between", value1, value2, "latitude");
            return (Criteria) this;
        }

        public Criteria andLongitudeIsNull() {
            addCriterion("Longitude is null");
            return (Criteria) this;
        }

        public Criteria andLongitudeIsNotNull() {
            addCriterion("Longitude is not null");
            return (Criteria) this;
        }

        public Criteria andLongitudeEqualTo(String value) {
            addCriterion("Longitude =", value, "longitude");
            return (Criteria) this;
        }

        public Criteria andLongitudeNotEqualTo(String value) {
            addCriterion("Longitude <>", value, "longitude");
            return (Criteria) this;
        }

        public Criteria andLongitudeGreaterThan(String value) {
            addCriterion("Longitude >", value, "longitude");
            return (Criteria) this;
        }

        public Criteria andLongitudeGreaterThanOrEqualTo(String value) {
            addCriterion("Longitude >=", value, "longitude");
            return (Criteria) this;
        }

        public Criteria andLongitudeLessThan(String value) {
            addCriterion("Longitude <", value, "longitude");
            return (Criteria) this;
        }

        public Criteria andLongitudeLessThanOrEqualTo(String value) {
            addCriterion("Longitude <=", value, "longitude");
            return (Criteria) this;
        }

        public Criteria andLongitudeLike(String value) {
            addCriterion("Longitude like", value, "longitude");
            return (Criteria) this;
        }

        public Criteria andLongitudeNotLike(String value) {
            addCriterion("Longitude not like", value, "longitude");
            return (Criteria) this;
        }

        public Criteria andLongitudeIn(List<String> values) {
            addCriterion("Longitude in", values, "longitude");
            return (Criteria) this;
        }

        public Criteria andLongitudeNotIn(List<String> values) {
            addCriterion("Longitude not in", values, "longitude");
            return (Criteria) this;
        }

        public Criteria andLongitudeBetween(String value1, String value2) {
            addCriterion("Longitude between", value1, value2, "longitude");
            return (Criteria) this;
        }

        public Criteria andLongitudeNotBetween(String value1, String value2) {
            addCriterion("Longitude not between", value1, value2, "longitude");
            return (Criteria) this;
        }

        public Criteria andPubmedIdIsNull() {
            addCriterion("PubMed_ID is null");
            return (Criteria) this;
        }

        public Criteria andPubmedIdIsNotNull() {
            addCriterion("PubMed_ID is not null");
            return (Criteria) this;
        }

        public Criteria andPubmedIdEqualTo(String value) {
            addCriterion("PubMed_ID =", value, "pubmedId");
            return (Criteria) this;
        }

        public Criteria andPubmedIdNotEqualTo(String value) {
            addCriterion("PubMed_ID <>", value, "pubmedId");
            return (Criteria) this;
        }

        public Criteria andPubmedIdGreaterThan(String value) {
            addCriterion("PubMed_ID >", value, "pubmedId");
            return (Criteria) this;
        }

        public Criteria andPubmedIdGreaterThanOrEqualTo(String value) {
            addCriterion("PubMed_ID >=", value, "pubmedId");
            return (Criteria) this;
        }

        public Criteria andPubmedIdLessThan(String value) {
            addCriterion("PubMed_ID <", value, "pubmedId");
            return (Criteria) this;
        }

        public Criteria andPubmedIdLessThanOrEqualTo(String value) {
            addCriterion("PubMed_ID <=", value, "pubmedId");
            return (Criteria) this;
        }

        public Criteria andPubmedIdLike(String value) {
            addCriterion("PubMed_ID like", value, "pubmedId");
            return (Criteria) this;
        }

        public Criteria andPubmedIdNotLike(String value) {
            addCriterion("PubMed_ID not like", value, "pubmedId");
            return (Criteria) this;
        }

        public Criteria andPubmedIdIn(List<String> values) {
            addCriterion("PubMed_ID in", values, "pubmedId");
            return (Criteria) this;
        }

        public Criteria andPubmedIdNotIn(List<String> values) {
            addCriterion("PubMed_ID not in", values, "pubmedId");
            return (Criteria) this;
        }

        public Criteria andPubmedIdBetween(String value1, String value2) {
            addCriterion("PubMed_ID between", value1, value2, "pubmedId");
            return (Criteria) this;
        }

        public Criteria andPubmedIdNotBetween(String value1, String value2) {
            addCriterion("PubMed_ID not between", value1, value2, "pubmedId");
            return (Criteria) this;
        }

        public Criteria andConditionsIsNull() {
            addCriterion("Conditions is null");
            return (Criteria) this;
        }

        public Criteria andConditionsIsNotNull() {
            addCriterion("Conditions is not null");
            return (Criteria) this;
        }

        public Criteria andConditionsEqualTo(String value) {
            addCriterion("Conditions =", value, "conditions");
            return (Criteria) this;
        }

        public Criteria andConditionsNotEqualTo(String value) {
            addCriterion("Conditions <>", value, "conditions");
            return (Criteria) this;
        }

        public Criteria andConditionsGreaterThan(String value) {
            addCriterion("Conditions >", value, "conditions");
            return (Criteria) this;
        }

        public Criteria andConditionsGreaterThanOrEqualTo(String value) {
            addCriterion("Conditions >=", value, "conditions");
            return (Criteria) this;
        }

        public Criteria andConditionsLessThan(String value) {
            addCriterion("Conditions <", value, "conditions");
            return (Criteria) this;
        }

        public Criteria andConditionsLessThanOrEqualTo(String value) {
            addCriterion("Conditions <=", value, "conditions");
            return (Criteria) this;
        }

        public Criteria andConditionsLike(String value) {
            addCriterion("Conditions like", value, "conditions");
            return (Criteria) this;
        }

        public Criteria andConditionsNotLike(String value) {
            addCriterion("Conditions not like", value, "conditions");
            return (Criteria) this;
        }

        public Criteria andConditionsIn(List<String> values) {
            addCriterion("Conditions in", values, "conditions");
            return (Criteria) this;
        }

        public Criteria andConditionsNotIn(List<String> values) {
            addCriterion("Conditions not in", values, "conditions");
            return (Criteria) this;
        }

        public Criteria andConditionsBetween(String value1, String value2) {
            addCriterion("Conditions between", value1, value2, "conditions");
            return (Criteria) this;
        }

        public Criteria andConditionsNotBetween(String value1, String value2) {
            addCriterion("Conditions not between", value1, value2, "conditions");
            return (Criteria) this;
        }

        public Criteria andPheotypeIsNull() {
            addCriterion("Pheotype is null");
            return (Criteria) this;
        }

        public Criteria andPheotypeIsNotNull() {
            addCriterion("Pheotype is not null");
            return (Criteria) this;
        }

        public Criteria andPheotypeEqualTo(String value) {
            addCriterion("Pheotype =", value, "pheotype");
            return (Criteria) this;
        }

        public Criteria andPheotypeNotEqualTo(String value) {
            addCriterion("Pheotype <>", value, "pheotype");
            return (Criteria) this;
        }

        public Criteria andPheotypeGreaterThan(String value) {
            addCriterion("Pheotype >", value, "pheotype");
            return (Criteria) this;
        }

        public Criteria andPheotypeGreaterThanOrEqualTo(String value) {
            addCriterion("Pheotype >=", value, "pheotype");
            return (Criteria) this;
        }

        public Criteria andPheotypeLessThan(String value) {
            addCriterion("Pheotype <", value, "pheotype");
            return (Criteria) this;
        }

        public Criteria andPheotypeLessThanOrEqualTo(String value) {
            addCriterion("Pheotype <=", value, "pheotype");
            return (Criteria) this;
        }

        public Criteria andPheotypeLike(String value) {
            addCriterion("Pheotype like", value, "pheotype");
            return (Criteria) this;
        }

        public Criteria andPheotypeNotLike(String value) {
            addCriterion("Pheotype not like", value, "pheotype");
            return (Criteria) this;
        }

        public Criteria andPheotypeIn(List<String> values) {
            addCriterion("Pheotype in", values, "pheotype");
            return (Criteria) this;
        }

        public Criteria andPheotypeNotIn(List<String> values) {
            addCriterion("Pheotype not in", values, "pheotype");
            return (Criteria) this;
        }

        public Criteria andPheotypeBetween(String value1, String value2) {
            addCriterion("Pheotype between", value1, value2, "pheotype");
            return (Criteria) this;
        }

        public Criteria andPheotypeNotBetween(String value1, String value2) {
            addCriterion("Pheotype not between", value1, value2, "pheotype");
            return (Criteria) this;
        }

        public Criteria andBreedIsNull() {
            addCriterion("Breed is null");
            return (Criteria) this;
        }

        public Criteria andBreedIsNotNull() {
            addCriterion("Breed is not null");
            return (Criteria) this;
        }

        public Criteria andBreedEqualTo(String value) {
            addCriterion("Breed =", value, "breed");
            return (Criteria) this;
        }

        public Criteria andBreedNotEqualTo(String value) {
            addCriterion("Breed <>", value, "breed");
            return (Criteria) this;
        }

        public Criteria andBreedGreaterThan(String value) {
            addCriterion("Breed >", value, "breed");
            return (Criteria) this;
        }

        public Criteria andBreedGreaterThanOrEqualTo(String value) {
            addCriterion("Breed >=", value, "breed");
            return (Criteria) this;
        }

        public Criteria andBreedLessThan(String value) {
            addCriterion("Breed <", value, "breed");
            return (Criteria) this;
        }

        public Criteria andBreedLessThanOrEqualTo(String value) {
            addCriterion("Breed <=", value, "breed");
            return (Criteria) this;
        }

        public Criteria andBreedLike(String value) {
            addCriterion("Breed like", value, "breed");
            return (Criteria) this;
        }

        public Criteria andBreedNotLike(String value) {
            addCriterion("Breed not like", value, "breed");
            return (Criteria) this;
        }

        public Criteria andBreedIn(List<String> values) {
            addCriterion("Breed in", values, "breed");
            return (Criteria) this;
        }

        public Criteria andBreedNotIn(List<String> values) {
            addCriterion("Breed not in", values, "breed");
            return (Criteria) this;
        }

        public Criteria andBreedBetween(String value1, String value2) {
            addCriterion("Breed between", value1, value2, "breed");
            return (Criteria) this;
        }

        public Criteria andBreedNotBetween(String value1, String value2) {
            addCriterion("Breed not between", value1, value2, "breed");
            return (Criteria) this;
        }

        public Criteria andSourceDatabaseIsNull() {
            addCriterion("Source_database is null");
            return (Criteria) this;
        }

        public Criteria andSourceDatabaseIsNotNull() {
            addCriterion("Source_database is not null");
            return (Criteria) this;
        }

        public Criteria andSourceDatabaseEqualTo(String value) {
            addCriterion("Source_database =", value, "sourceDatabase");
            return (Criteria) this;
        }

        public Criteria andSourceDatabaseNotEqualTo(String value) {
            addCriterion("Source_database <>", value, "sourceDatabase");
            return (Criteria) this;
        }

        public Criteria andSourceDatabaseGreaterThan(String value) {
            addCriterion("Source_database >", value, "sourceDatabase");
            return (Criteria) this;
        }

        public Criteria andSourceDatabaseGreaterThanOrEqualTo(String value) {
            addCriterion("Source_database >=", value, "sourceDatabase");
            return (Criteria) this;
        }

        public Criteria andSourceDatabaseLessThan(String value) {
            addCriterion("Source_database <", value, "sourceDatabase");
            return (Criteria) this;
        }

        public Criteria andSourceDatabaseLessThanOrEqualTo(String value) {
            addCriterion("Source_database <=", value, "sourceDatabase");
            return (Criteria) this;
        }

        public Criteria andSourceDatabaseLike(String value) {
            addCriterion("Source_database like", value, "sourceDatabase");
            return (Criteria) this;
        }

        public Criteria andSourceDatabaseNotLike(String value) {
            addCriterion("Source_database not like", value, "sourceDatabase");
            return (Criteria) this;
        }

        public Criteria andSourceDatabaseIn(List<String> values) {
            addCriterion("Source_database in", values, "sourceDatabase");
            return (Criteria) this;
        }

        public Criteria andSourceDatabaseNotIn(List<String> values) {
            addCriterion("Source_database not in", values, "sourceDatabase");
            return (Criteria) this;
        }

        public Criteria andSourceDatabaseBetween(String value1, String value2) {
            addCriterion("Source_database between", value1, value2, "sourceDatabase");
            return (Criteria) this;
        }

        public Criteria andSourceDatabaseNotBetween(String value1, String value2) {
            addCriterion("Source_database not between", value1, value2, "sourceDatabase");
            return (Criteria) this;
        }

        public Criteria andBioprojectDescriptionIsNull() {
            addCriterion("Bioproject_description is null");
            return (Criteria) this;
        }

        public Criteria andBioprojectDescriptionIsNotNull() {
            addCriterion("Bioproject_description is not null");
            return (Criteria) this;
        }

        public Criteria andBioprojectDescriptionEqualTo(String value) {
            addCriterion("Bioproject_description =", value, "bioprojectDescription");
            return (Criteria) this;
        }

        public Criteria andBioprojectDescriptionNotEqualTo(String value) {
            addCriterion("Bioproject_description <>", value, "bioprojectDescription");
            return (Criteria) this;
        }

        public Criteria andBioprojectDescriptionGreaterThan(String value) {
            addCriterion("Bioproject_description >", value, "bioprojectDescription");
            return (Criteria) this;
        }

        public Criteria andBioprojectDescriptionGreaterThanOrEqualTo(String value) {
            addCriterion("Bioproject_description >=", value, "bioprojectDescription");
            return (Criteria) this;
        }

        public Criteria andBioprojectDescriptionLessThan(String value) {
            addCriterion("Bioproject_description <", value, "bioprojectDescription");
            return (Criteria) this;
        }

        public Criteria andBioprojectDescriptionLessThanOrEqualTo(String value) {
            addCriterion("Bioproject_description <=", value, "bioprojectDescription");
            return (Criteria) this;
        }

        public Criteria andBioprojectDescriptionLike(String value) {
            addCriterion("Bioproject_description like", value, "bioprojectDescription");
            return (Criteria) this;
        }

        public Criteria andBioprojectDescriptionNotLike(String value) {
            addCriterion("Bioproject_description not like", value, "bioprojectDescription");
            return (Criteria) this;
        }

        public Criteria andBioprojectDescriptionIn(List<String> values) {
            addCriterion("Bioproject_description in", values, "bioprojectDescription");
            return (Criteria) this;
        }

        public Criteria andBioprojectDescriptionNotIn(List<String> values) {
            addCriterion("Bioproject_description not in", values, "bioprojectDescription");
            return (Criteria) this;
        }

        public Criteria andBioprojectDescriptionBetween(String value1, String value2) {
            addCriterion("Bioproject_description between", value1, value2, "bioprojectDescription");
            return (Criteria) this;
        }

        public Criteria andBioprojectDescriptionNotBetween(String value1, String value2) {
            addCriterion("Bioproject_description not between", value1, value2, "bioprojectDescription");
            return (Criteria) this;
        }

        public Criteria andSampleNumberIsNull() {
            addCriterion("Sample_number is null");
            return (Criteria) this;
        }

        public Criteria andSampleNumberIsNotNull() {
            addCriterion("Sample_number is not null");
            return (Criteria) this;
        }

        public Criteria andSampleNumberEqualTo(String value) {
            addCriterion("Sample_number =", value, "sampleNumber");
            return (Criteria) this;
        }

        public Criteria andSampleNumberNotEqualTo(String value) {
            addCriterion("Sample_number <>", value, "sampleNumber");
            return (Criteria) this;
        }

        public Criteria andSampleNumberGreaterThan(String value) {
            addCriterion("Sample_number >", value, "sampleNumber");
            return (Criteria) this;
        }

        public Criteria andSampleNumberGreaterThanOrEqualTo(String value) {
            addCriterion("Sample_number >=", value, "sampleNumber");
            return (Criteria) this;
        }

        public Criteria andSampleNumberLessThan(String value) {
            addCriterion("Sample_number <", value, "sampleNumber");
            return (Criteria) this;
        }

        public Criteria andSampleNumberLessThanOrEqualTo(String value) {
            addCriterion("Sample_number <=", value, "sampleNumber");
            return (Criteria) this;
        }

        public Criteria andSampleNumberLike(String value) {
            addCriterion("Sample_number like", value, "sampleNumber");
            return (Criteria) this;
        }

        public Criteria andSampleNumberNotLike(String value) {
            addCriterion("Sample_number not like", value, "sampleNumber");
            return (Criteria) this;
        }

        public Criteria andSampleNumberIn(List<String> values) {
            addCriterion("Sample_number in", values, "sampleNumber");
            return (Criteria) this;
        }

        public Criteria andSampleNumberNotIn(List<String> values) {
            addCriterion("Sample_number not in", values, "sampleNumber");
            return (Criteria) this;
        }

        public Criteria andSampleNumberBetween(String value1, String value2) {
            addCriterion("Sample_number between", value1, value2, "sampleNumber");
            return (Criteria) this;
        }

        public Criteria andSampleNumberNotBetween(String value1, String value2) {
            addCriterion("Sample_number not between", value1, value2, "sampleNumber");
            return (Criteria) this;
        }

        public Criteria andLianjiebIsNull() {
            addCriterion("LianjieB is null");
            return (Criteria) this;
        }

        public Criteria andLianjiebIsNotNull() {
            addCriterion("LianjieB is not null");
            return (Criteria) this;
        }

        public Criteria andLianjiebEqualTo(String value) {
            addCriterion("LianjieB =", value, "lianjieb");
            return (Criteria) this;
        }

        public Criteria andLianjiebNotEqualTo(String value) {
            addCriterion("LianjieB <>", value, "lianjieb");
            return (Criteria) this;
        }

        public Criteria andLianjiebGreaterThan(String value) {
            addCriterion("LianjieB >", value, "lianjieb");
            return (Criteria) this;
        }

        public Criteria andLianjiebGreaterThanOrEqualTo(String value) {
            addCriterion("LianjieB >=", value, "lianjieb");
            return (Criteria) this;
        }

        public Criteria andLianjiebLessThan(String value) {
            addCriterion("LianjieB <", value, "lianjieb");
            return (Criteria) this;
        }

        public Criteria andLianjiebLessThanOrEqualTo(String value) {
            addCriterion("LianjieB <=", value, "lianjieb");
            return (Criteria) this;
        }

        public Criteria andLianjiebLike(String value) {
            addCriterion("LianjieB like", value, "lianjieb");
            return (Criteria) this;
        }

        public Criteria andLianjiebNotLike(String value) {
            addCriterion("LianjieB not like", value, "lianjieb");
            return (Criteria) this;
        }

        public Criteria andLianjiebIn(List<String> values) {
            addCriterion("LianjieB in", values, "lianjieb");
            return (Criteria) this;
        }

        public Criteria andLianjiebNotIn(List<String> values) {
            addCriterion("LianjieB not in", values, "lianjieb");
            return (Criteria) this;
        }

        public Criteria andLianjiebBetween(String value1, String value2) {
            addCriterion("LianjieB between", value1, value2, "lianjieb");
            return (Criteria) this;
        }

        public Criteria andLianjiebNotBetween(String value1, String value2) {
            addCriterion("LianjieB not between", value1, value2, "lianjieb");
            return (Criteria) this;
        }

        public Criteria andOutlineIsNull() {
            addCriterion("Outline is null");
            return (Criteria) this;
        }

        public Criteria andOutlineIsNotNull() {
            addCriterion("Outline is not null");
            return (Criteria) this;
        }

        public Criteria andOutlineEqualTo(String value) {
            addCriterion("Outline =", value, "outline");
            return (Criteria) this;
        }

        public Criteria andOutlineNotEqualTo(String value) {
            addCriterion("Outline <>", value, "outline");
            return (Criteria) this;
        }

        public Criteria andOutlineGreaterThan(String value) {
            addCriterion("Outline >", value, "outline");
            return (Criteria) this;
        }

        public Criteria andOutlineGreaterThanOrEqualTo(String value) {
            addCriterion("Outline >=", value, "outline");
            return (Criteria) this;
        }

        public Criteria andOutlineLessThan(String value) {
            addCriterion("Outline <", value, "outline");
            return (Criteria) this;
        }

        public Criteria andOutlineLessThanOrEqualTo(String value) {
            addCriterion("Outline <=", value, "outline");
            return (Criteria) this;
        }

        public Criteria andOutlineLike(String value) {
            addCriterion("Outline like", value, "outline");
            return (Criteria) this;
        }

        public Criteria andOutlineNotLike(String value) {
            addCriterion("Outline not like", value, "outline");
            return (Criteria) this;
        }

        public Criteria andOutlineIn(List<String> values) {
            addCriterion("Outline in", values, "outline");
            return (Criteria) this;
        }

        public Criteria andOutlineNotIn(List<String> values) {
            addCriterion("Outline not in", values, "outline");
            return (Criteria) this;
        }

        public Criteria andOutlineBetween(String value1, String value2) {
            addCriterion("Outline between", value1, value2, "outline");
            return (Criteria) this;
        }

        public Criteria andOutlineNotBetween(String value1, String value2) {
            addCriterion("Outline not between", value1, value2, "outline");
            return (Criteria) this;
        }

        public Criteria andOrdersIsNull() {
            addCriterion("Orders is null");
            return (Criteria) this;
        }

        public Criteria andOrdersIsNotNull() {
            addCriterion("Orders is not null");
            return (Criteria) this;
        }

        public Criteria andOrdersEqualTo(String value) {
            addCriterion("Orders =", value, "orders");
            return (Criteria) this;
        }

        public Criteria andOrdersNotEqualTo(String value) {
            addCriterion("Orders <>", value, "orders");
            return (Criteria) this;
        }

        public Criteria andOrdersGreaterThan(String value) {
            addCriterion("Orders >", value, "orders");
            return (Criteria) this;
        }

        public Criteria andOrdersGreaterThanOrEqualTo(String value) {
            addCriterion("Orders >=", value, "orders");
            return (Criteria) this;
        }

        public Criteria andOrdersLessThan(String value) {
            addCriterion("Orders <", value, "orders");
            return (Criteria) this;
        }

        public Criteria andOrdersLessThanOrEqualTo(String value) {
            addCriterion("Orders <=", value, "orders");
            return (Criteria) this;
        }

        public Criteria andOrdersLike(String value) {
            addCriterion("Orders like", value, "orders");
            return (Criteria) this;
        }

        public Criteria andOrdersNotLike(String value) {
            addCriterion("Orders not like", value, "orders");
            return (Criteria) this;
        }

        public Criteria andOrdersIn(List<String> values) {
            addCriterion("Orders in", values, "orders");
            return (Criteria) this;
        }

        public Criteria andOrdersNotIn(List<String> values) {
            addCriterion("Orders not in", values, "orders");
            return (Criteria) this;
        }

        public Criteria andOrdersBetween(String value1, String value2) {
            addCriterion("Orders between", value1, value2, "orders");
            return (Criteria) this;
        }

        public Criteria andOrdersNotBetween(String value1, String value2) {
            addCriterion("Orders not between", value1, value2, "orders");
            return (Criteria) this;
        }

        public Criteria andFamilyIsNull() {
            addCriterion("Family is null");
            return (Criteria) this;
        }

        public Criteria andFamilyIsNotNull() {
            addCriterion("Family is not null");
            return (Criteria) this;
        }

        public Criteria andFamilyEqualTo(String value) {
            addCriterion("Family =", value, "family");
            return (Criteria) this;
        }

        public Criteria andFamilyNotEqualTo(String value) {
            addCriterion("Family <>", value, "family");
            return (Criteria) this;
        }

        public Criteria andFamilyGreaterThan(String value) {
            addCriterion("Family >", value, "family");
            return (Criteria) this;
        }

        public Criteria andFamilyGreaterThanOrEqualTo(String value) {
            addCriterion("Family >=", value, "family");
            return (Criteria) this;
        }

        public Criteria andFamilyLessThan(String value) {
            addCriterion("Family <", value, "family");
            return (Criteria) this;
        }

        public Criteria andFamilyLessThanOrEqualTo(String value) {
            addCriterion("Family <=", value, "family");
            return (Criteria) this;
        }

        public Criteria andFamilyLike(String value) {
            addCriterion("Family like", value, "family");
            return (Criteria) this;
        }

        public Criteria andFamilyNotLike(String value) {
            addCriterion("Family not like", value, "family");
            return (Criteria) this;
        }

        public Criteria andFamilyIn(List<String> values) {
            addCriterion("Family in", values, "family");
            return (Criteria) this;
        }

        public Criteria andFamilyNotIn(List<String> values) {
            addCriterion("Family not in", values, "family");
            return (Criteria) this;
        }

        public Criteria andFamilyBetween(String value1, String value2) {
            addCriterion("Family between", value1, value2, "family");
            return (Criteria) this;
        }

        public Criteria andFamilyNotBetween(String value1, String value2) {
            addCriterion("Family not between", value1, value2, "family");
            return (Criteria) this;
        }

        public Criteria andGenusIsNull() {
            addCriterion("Genus is null");
            return (Criteria) this;
        }

        public Criteria andGenusIsNotNull() {
            addCriterion("Genus is not null");
            return (Criteria) this;
        }

        public Criteria andGenusEqualTo(String value) {
            addCriterion("Genus =", value, "genus");
            return (Criteria) this;
        }

        public Criteria andGenusNotEqualTo(String value) {
            addCriterion("Genus <>", value, "genus");
            return (Criteria) this;
        }

        public Criteria andGenusGreaterThan(String value) {
            addCriterion("Genus >", value, "genus");
            return (Criteria) this;
        }

        public Criteria andGenusGreaterThanOrEqualTo(String value) {
            addCriterion("Genus >=", value, "genus");
            return (Criteria) this;
        }

        public Criteria andGenusLessThan(String value) {
            addCriterion("Genus <", value, "genus");
            return (Criteria) this;
        }

        public Criteria andGenusLessThanOrEqualTo(String value) {
            addCriterion("Genus <=", value, "genus");
            return (Criteria) this;
        }

        public Criteria andGenusLike(String value) {
            addCriterion("Genus like", value, "genus");
            return (Criteria) this;
        }

        public Criteria andGenusNotLike(String value) {
            addCriterion("Genus not like", value, "genus");
            return (Criteria) this;
        }

        public Criteria andGenusIn(List<String> values) {
            addCriterion("Genus in", values, "genus");
            return (Criteria) this;
        }

        public Criteria andGenusNotIn(List<String> values) {
            addCriterion("Genus not in", values, "genus");
            return (Criteria) this;
        }

        public Criteria andGenusBetween(String value1, String value2) {
            addCriterion("Genus between", value1, value2, "genus");
            return (Criteria) this;
        }

        public Criteria andGenusNotBetween(String value1, String value2) {
            addCriterion("Genus not between", value1, value2, "genus");
            return (Criteria) this;
        }

        public Criteria andSpeciesIsNull() {
            addCriterion("Species is null");
            return (Criteria) this;
        }

        public Criteria andSpeciesIsNotNull() {
            addCriterion("Species is not null");
            return (Criteria) this;
        }

        public Criteria andSpeciesEqualTo(String value) {
            addCriterion("Species =", value, "species");
            return (Criteria) this;
        }

        public Criteria andSpeciesNotEqualTo(String value) {
            addCriterion("Species <>", value, "species");
            return (Criteria) this;
        }

        public Criteria andSpeciesGreaterThan(String value) {
            addCriterion("Species >", value, "species");
            return (Criteria) this;
        }

        public Criteria andSpeciesGreaterThanOrEqualTo(String value) {
            addCriterion("Species >=", value, "species");
            return (Criteria) this;
        }

        public Criteria andSpeciesLessThan(String value) {
            addCriterion("Species <", value, "species");
            return (Criteria) this;
        }

        public Criteria andSpeciesLessThanOrEqualTo(String value) {
            addCriterion("Species <=", value, "species");
            return (Criteria) this;
        }

        public Criteria andSpeciesLike(String value) {
            addCriterion("Species like", value, "species");
            return (Criteria) this;
        }

        public Criteria andSpeciesNotLike(String value) {
            addCriterion("Species not like", value, "species");
            return (Criteria) this;
        }

        public Criteria andSpeciesIn(List<String> values) {
            addCriterion("Species in", values, "species");
            return (Criteria) this;
        }

        public Criteria andSpeciesNotIn(List<String> values) {
            addCriterion("Species not in", values, "species");
            return (Criteria) this;
        }

        public Criteria andSpeciesBetween(String value1, String value2) {
            addCriterion("Species between", value1, value2, "species");
            return (Criteria) this;
        }

        public Criteria andSpeciesNotBetween(String value1, String value2) {
            addCriterion("Species not between", value1, value2, "species");
            return (Criteria) this;
        }

        public Criteria andLianjiepIsNull() {
            addCriterion("LianjieP is null");
            return (Criteria) this;
        }

        public Criteria andLianjiepIsNotNull() {
            addCriterion("LianjieP is not null");
            return (Criteria) this;
        }

        public Criteria andLianjiepEqualTo(String value) {
            addCriterion("LianjieP =", value, "lianjiep");
            return (Criteria) this;
        }

        public Criteria andLianjiepNotEqualTo(String value) {
            addCriterion("LianjieP <>", value, "lianjiep");
            return (Criteria) this;
        }

        public Criteria andLianjiepGreaterThan(String value) {
            addCriterion("LianjieP >", value, "lianjiep");
            return (Criteria) this;
        }

        public Criteria andLianjiepGreaterThanOrEqualTo(String value) {
            addCriterion("LianjieP >=", value, "lianjiep");
            return (Criteria) this;
        }

        public Criteria andLianjiepLessThan(String value) {
            addCriterion("LianjieP <", value, "lianjiep");
            return (Criteria) this;
        }

        public Criteria andLianjiepLessThanOrEqualTo(String value) {
            addCriterion("LianjieP <=", value, "lianjiep");
            return (Criteria) this;
        }

        public Criteria andLianjiepLike(String value) {
            addCriterion("LianjieP like", value, "lianjiep");
            return (Criteria) this;
        }

        public Criteria andLianjiepNotLike(String value) {
            addCriterion("LianjieP not like", value, "lianjiep");
            return (Criteria) this;
        }

        public Criteria andLianjiepIn(List<String> values) {
            addCriterion("LianjieP in", values, "lianjiep");
            return (Criteria) this;
        }

        public Criteria andLianjiepNotIn(List<String> values) {
            addCriterion("LianjieP not in", values, "lianjiep");
            return (Criteria) this;
        }

        public Criteria andLianjiepBetween(String value1, String value2) {
            addCriterion("LianjieP between", value1, value2, "lianjiep");
            return (Criteria) this;
        }

        public Criteria andLianjiepNotBetween(String value1, String value2) {
            addCriterion("LianjieP not between", value1, value2, "lianjiep");
            return (Criteria) this;
        }

        public Criteria andLianjiesIsNull() {
            addCriterion("LianjieS is null");
            return (Criteria) this;
        }

        public Criteria andLianjiesIsNotNull() {
            addCriterion("LianjieS is not null");
            return (Criteria) this;
        }

        public Criteria andLianjiesEqualTo(String value) {
            addCriterion("LianjieS =", value, "lianjies");
            return (Criteria) this;
        }

        public Criteria andLianjiesNotEqualTo(String value) {
            addCriterion("LianjieS <>", value, "lianjies");
            return (Criteria) this;
        }

        public Criteria andLianjiesGreaterThan(String value) {
            addCriterion("LianjieS >", value, "lianjies");
            return (Criteria) this;
        }

        public Criteria andLianjiesGreaterThanOrEqualTo(String value) {
            addCriterion("LianjieS >=", value, "lianjies");
            return (Criteria) this;
        }

        public Criteria andLianjiesLessThan(String value) {
            addCriterion("LianjieS <", value, "lianjies");
            return (Criteria) this;
        }

        public Criteria andLianjiesLessThanOrEqualTo(String value) {
            addCriterion("LianjieS <=", value, "lianjies");
            return (Criteria) this;
        }

        public Criteria andLianjiesLike(String value) {
            addCriterion("LianjieS like", value, "lianjies");
            return (Criteria) this;
        }

        public Criteria andLianjiesNotLike(String value) {
            addCriterion("LianjieS not like", value, "lianjies");
            return (Criteria) this;
        }

        public Criteria andLianjiesIn(List<String> values) {
            addCriterion("LianjieS in", values, "lianjies");
            return (Criteria) this;
        }

        public Criteria andLianjiesNotIn(List<String> values) {
            addCriterion("LianjieS not in", values, "lianjies");
            return (Criteria) this;
        }

        public Criteria andLianjiesBetween(String value1, String value2) {
            addCriterion("LianjieS between", value1, value2, "lianjies");
            return (Criteria) this;
        }

        public Criteria andLianjiesNotBetween(String value1, String value2) {
            addCriterion("LianjieS not between", value1, value2, "lianjies");
            return (Criteria) this;
        }

        public Criteria andLianjieeIsNull() {
            addCriterion("LianjieE is null");
            return (Criteria) this;
        }

        public Criteria andLianjieeIsNotNull() {
            addCriterion("LianjieE is not null");
            return (Criteria) this;
        }

        public Criteria andLianjieeEqualTo(String value) {
            addCriterion("LianjieE =", value, "lianjiee");
            return (Criteria) this;
        }

        public Criteria andLianjieeNotEqualTo(String value) {
            addCriterion("LianjieE <>", value, "lianjiee");
            return (Criteria) this;
        }

        public Criteria andLianjieeGreaterThan(String value) {
            addCriterion("LianjieE >", value, "lianjiee");
            return (Criteria) this;
        }

        public Criteria andLianjieeGreaterThanOrEqualTo(String value) {
            addCriterion("LianjieE >=", value, "lianjiee");
            return (Criteria) this;
        }

        public Criteria andLianjieeLessThan(String value) {
            addCriterion("LianjieE <", value, "lianjiee");
            return (Criteria) this;
        }

        public Criteria andLianjieeLessThanOrEqualTo(String value) {
            addCriterion("LianjieE <=", value, "lianjiee");
            return (Criteria) this;
        }

        public Criteria andLianjieeLike(String value) {
            addCriterion("LianjieE like", value, "lianjiee");
            return (Criteria) this;
        }

        public Criteria andLianjieeNotLike(String value) {
            addCriterion("LianjieE not like", value, "lianjiee");
            return (Criteria) this;
        }

        public Criteria andLianjieeIn(List<String> values) {
            addCriterion("LianjieE in", values, "lianjiee");
            return (Criteria) this;
        }

        public Criteria andLianjieeNotIn(List<String> values) {
            addCriterion("LianjieE not in", values, "lianjiee");
            return (Criteria) this;
        }

        public Criteria andLianjieeBetween(String value1, String value2) {
            addCriterion("LianjieE between", value1, value2, "lianjiee");
            return (Criteria) this;
        }

        public Criteria andLianjieeNotBetween(String value1, String value2) {
            addCriterion("LianjieE not between", value1, value2, "lianjiee");
            return (Criteria) this;
        }

        public Criteria andBioprojectTypeIsNull() {
            addCriterion("Bioproject_type is null");
            return (Criteria) this;
        }

        public Criteria andBioprojectTypeIsNotNull() {
            addCriterion("Bioproject_type is not null");
            return (Criteria) this;
        }

        public Criteria andBioprojectTypeEqualTo(String value) {
            addCriterion("Bioproject_type =", value, "bioprojectType");
            return (Criteria) this;
        }

        public Criteria andBioprojectTypeNotEqualTo(String value) {
            addCriterion("Bioproject_type <>", value, "bioprojectType");
            return (Criteria) this;
        }

        public Criteria andBioprojectTypeGreaterThan(String value) {
            addCriterion("Bioproject_type >", value, "bioprojectType");
            return (Criteria) this;
        }

        public Criteria andBioprojectTypeGreaterThanOrEqualTo(String value) {
            addCriterion("Bioproject_type >=", value, "bioprojectType");
            return (Criteria) this;
        }

        public Criteria andBioprojectTypeLessThan(String value) {
            addCriterion("Bioproject_type <", value, "bioprojectType");
            return (Criteria) this;
        }

        public Criteria andBioprojectTypeLessThanOrEqualTo(String value) {
            addCriterion("Bioproject_type <=", value, "bioprojectType");
            return (Criteria) this;
        }

        public Criteria andBioprojectTypeLike(String value) {
            addCriterion("Bioproject_type like", value, "bioprojectType");
            return (Criteria) this;
        }

        public Criteria andBioprojectTypeNotLike(String value) {
            addCriterion("Bioproject_type not like", value, "bioprojectType");
            return (Criteria) this;
        }

        public Criteria andBioprojectTypeIn(List<String> values) {
            addCriterion("Bioproject_type in", values, "bioprojectType");
            return (Criteria) this;
        }

        public Criteria andBioprojectTypeNotIn(List<String> values) {
            addCriterion("Bioproject_type not in", values, "bioprojectType");
            return (Criteria) this;
        }

        public Criteria andBioprojectTypeBetween(String value1, String value2) {
            addCriterion("Bioproject_type between", value1, value2, "bioprojectType");
            return (Criteria) this;
        }

        public Criteria andBioprojectTypeNotBetween(String value1, String value2) {
            addCriterion("Bioproject_type not between", value1, value2, "bioprojectType");
            return (Criteria) this;
        }

        public Criteria andSampleTypeIsNull() {
            addCriterion("Sample_type is null");
            return (Criteria) this;
        }

        public Criteria andSampleTypeIsNotNull() {
            addCriterion("Sample_type is not null");
            return (Criteria) this;
        }

        public Criteria andSampleTypeEqualTo(String value) {
            addCriterion("Sample_type =", value, "sampleType");
            return (Criteria) this;
        }

        public Criteria andSampleTypeNotEqualTo(String value) {
            addCriterion("Sample_type <>", value, "sampleType");
            return (Criteria) this;
        }

        public Criteria andSampleTypeGreaterThan(String value) {
            addCriterion("Sample_type >", value, "sampleType");
            return (Criteria) this;
        }

        public Criteria andSampleTypeGreaterThanOrEqualTo(String value) {
            addCriterion("Sample_type >=", value, "sampleType");
            return (Criteria) this;
        }

        public Criteria andSampleTypeLessThan(String value) {
            addCriterion("Sample_type <", value, "sampleType");
            return (Criteria) this;
        }

        public Criteria andSampleTypeLessThanOrEqualTo(String value) {
            addCriterion("Sample_type <=", value, "sampleType");
            return (Criteria) this;
        }

        public Criteria andSampleTypeLike(String value) {
            addCriterion("Sample_type like", value, "sampleType");
            return (Criteria) this;
        }

        public Criteria andSampleTypeNotLike(String value) {
            addCriterion("Sample_type not like", value, "sampleType");
            return (Criteria) this;
        }

        public Criteria andSampleTypeIn(List<String> values) {
            addCriterion("Sample_type in", values, "sampleType");
            return (Criteria) this;
        }

        public Criteria andSampleTypeNotIn(List<String> values) {
            addCriterion("Sample_type not in", values, "sampleType");
            return (Criteria) this;
        }

        public Criteria andSampleTypeBetween(String value1, String value2) {
            addCriterion("Sample_type between", value1, value2, "sampleType");
            return (Criteria) this;
        }

        public Criteria andSampleTypeNotBetween(String value1, String value2) {
            addCriterion("Sample_type not between", value1, value2, "sampleType");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}