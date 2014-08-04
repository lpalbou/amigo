/* 
 * Package: golr.js
 * 
 * Namespace: amigo.data.golr
 * 
 * This package was automatically created during an AmiGO 2 installation
 * from the YAML configuration files that AmiGO pulls in.
 *
 * Useful information about GOlr. See the package <golr_conf.js>
 * for the API to interact with this data file.
 *
 * NOTE: This file is generated dynamically at installation time.
 * Hard to work with unit tests--hope it's not too bad. You have to
 * occasionally copy back to keep the unit tests sane.
 *
 * NOTE: This file has a slightly different latout from the YAML
 * configurations files--in addition instead of the fields
 * being in lists (fields), they are in hashes keyed by the
 * field id (fields_hash).
 */

// All of the server/instance-specific meta-data.
if ( typeof amigo == "undefined" ){ var amigo = {}; }
if ( typeof amigo.data == "undefined" ){ amigo.data = {}; }

/*
 * Variable: golr
 * 
 * The configuration for the data.
 * Essentially a JSONification of the OWLTools YAML files.
 * This should be consumed directly by <bbop.golr.conf>.
 */
amigo.data.golr = {
<<<<<<< HEAD
   "ontology" : {
      "schema_generating" : "true",
      "_infile" : "/home/sjcarbon/local/src/git/amigo/metadata//ont-config.yaml",
      "id" : "ontology",
      "result_weights" : "annotation_class^8.0 description^6.0 source^4.0 synonym^3.0 alternate_id^2.0",
      "_strict" : 0,
      "boost_weights" : "annotation_class^3.0 annotation_class_label^5.5 description^1.0 comment^0.5 synonym^1.0 alternate_id^1.0 regulates_closure^1.0 regulates_closure_label^1.0",
      "description" : "Ontology classes for GO.",
      "fields" : [
         {
            "id" : "id",
            "indexed" : "true",
            "searchable" : "false",
            "transform" : [],
            "cardinality" : "single",
            "required" : "false",
            "description" : "Term identifier.",
            "property" : [
               "getIdentifier"
            ],
            "display_name" : "Acc",
            "type" : "string"
         },
         {
            "cardinality" : "single",
            "searchable" : "false",
            "transform" : [],
            "required" : "false",
            "description" : "Term identifier.",
            "id" : "annotation_class",
            "indexed" : "true",
            "property" : [
               "getIdentifier"
            ],
            "display_name" : "Term",
            "type" : "string"
         },
         {
            "indexed" : "true",
            "id" : "annotation_class_label",
            "description" : "Identifier.",
            "required" : "false",
            "searchable" : "true",
            "cardinality" : "single",
            "transform" : [],
            "type" : "string",
            "display_name" : "Term",
            "property" : [
               "getLabel"
            ]
         },
         {
            "required" : "false",
            "searchable" : "true",
            "cardinality" : "single",
            "transform" : [],
            "description" : "Term definition.",
            "id" : "description",
            "indexed" : "true",
            "property" : [
               "getDef"
            ],
            "type" : "string",
            "display_name" : "Definition"
         },
         {
            "property" : [
               "getNamespace"
            ],
            "type" : "string",
            "display_name" : "Ontology source",
            "required" : "false",
            "transform" : [],
            "searchable" : "false",
            "cardinality" : "single",
            "description" : "Term namespace.",
            "id" : "source",
            "indexed" : "true"
         },
         {
            "id" : "is_obsolete",
            "indexed" : "true",
            "transform" : [],
            "searchable" : "false",
            "cardinality" : "single",
            "required" : "false",
            "description" : "Is the term obsolete?",
            "property" : [
               "getIsObsoleteBinaryString"
            ],
            "display_name" : "Obsoletion",
            "type" : "boolean"
         },
         {
            "property" : [
               "getComment"
            ],
            "type" : "string",
            "display_name" : "Comment",
            "id" : "comment",
            "indexed" : "true",
            "required" : "false",
            "cardinality" : "single",
            "searchable" : "true",
            "transform" : [],
            "description" : "Term comment."
         },
         {
            "type" : "string",
            "display_name" : "Synonyms",
            "property" : [
               "getOBOSynonymStrings"
            ],
            "description" : "Term synonyms.",
            "required" : "false",
            "searchable" : "true",
            "cardinality" : "multi",
            "transform" : [],
            "indexed" : "true",
            "id" : "synonym"
         },
         {
            "type" : "string",
            "display_name" : "Alt ID",
            "property" : [
               "getAnnotationPropertyValues",
               "alt_id"
            ],
            "description" : "Alternate term identifier.",
            "required" : "false",
            "cardinality" : "multi",
            "searchable" : "false",
            "transform" : [],
            "indexed" : "true",
            "id" : "alternate_id"
         },
         {
            "property" : [
               "getAnnotationPropertyValues",
               "replaced_by"
            ],
            "display_name" : "Replaced By",
            "type" : "string",
            "transform" : [],
            "cardinality" : "multi",
            "searchable" : "false",
            "required" : "false",
            "description" : "Term that replaces this term.",
            "id" : "replaced_by",
            "indexed" : "true"
         },
         {
            "type" : "string",
            "display_name" : "Consider",
            "property" : [
               "getAnnotationPropertyValues",
               "consider"
            ],
            "description" : "Others terms you might want to look at.",
            "required" : "false",
            "cardinality" : "multi",
            "transform" : [],
            "searchable" : "false",
            "indexed" : "true",
            "id" : "consider"
         },
         {
            "property" : [
               "getSubsets"
            ],
            "display_name" : "Subset",
            "type" : "string",
            "id" : "subset",
            "indexed" : "true",
            "transform" : [],
            "cardinality" : "multi",
            "searchable" : "false",
            "required" : "false",
            "description" : "Special use collections of terms."
         },
         {
            "property" : [
               "getDefXref"
            ],
            "type" : "string",
            "display_name" : "Def xref",
            "required" : "false",
            "cardinality" : "multi",
            "searchable" : "false",
            "transform" : [],
            "description" : "Definition cross-reference.",
            "id" : "definition_xref",
            "indexed" : "true"
         },
         {
            "property" : [
               "getXref"
            ],
            "display_name" : "DB xref",
            "type" : "string",
            "transform" : [],
            "searchable" : "false",
            "cardinality" : "multi",
            "required" : "false",
            "description" : "Database cross-reference.",
            "id" : "database_xref",
            "indexed" : "true"
         },
         {
            "id" : "isa_partof_closure",
            "indexed" : "true",
            "required" : "false",
            "transform" : [],
            "searchable" : "false",
            "cardinality" : "multi",
            "description" : "Ancestral terms (is_a/part_of).",
            "property" : [
               "getRelationIDClosure",
               "BFO:0000050"
            ],
            "type" : "string",
            "display_name" : "Is-a/part-of"
         },
         {
            "property" : [
               "getRelationLabelClosure",
               "BFO:0000050"
            ],
            "display_name" : "Is-a/part-of",
            "type" : "string",
            "id" : "isa_partof_closure_label",
            "indexed" : "true",
            "searchable" : "true",
            "cardinality" : "multi",
            "transform" : [],
            "required" : "false",
            "description" : "Ancestral terms (is_a/part_of)."
         },
         {
            "property" : [
               "getRelationIDClosure",
               "BFO:0000050",
               "BFO:0000066",
               "RO:0002211",
               "RO:0002212",
               "RO:0002213",
               "RO:0002215",
               "RO:0002216"
            ],
            "display_name" : "Ancestor",
            "type" : "string",
            "cardinality" : "multi",
            "searchable" : "false",
            "transform" : [],
            "required" : "false",
            "description" : "Ancestral terms (regulates, occurs in, capable_of).",
            "id" : "regulates_closure",
            "indexed" : "true"
         },
         {
            "description" : "Ancestral terms (regulates, occurs in, capable_of).",
            "required" : "false",
            "searchable" : "true",
            "cardinality" : "multi",
            "transform" : [],
            "indexed" : "true",
            "id" : "regulates_closure_label",
            "type" : "string",
            "display_name" : "Ancestor",
            "property" : [
               "getRelationLabelClosure",
               "BFO:0000050",
               "BFO:0000066",
               "RO:0002211",
               "RO:0002212",
               "RO:0002213",
               "RO:0002215",
               "RO:0002216"
            ]
         },
         {
            "required" : "false",
            "transform" : [],
            "cardinality" : "single",
            "searchable" : "false",
            "description" : "JSON blob form of the local stepwise topology graph. Uses various relations (including regulates, occurs in, capable_of).",
            "id" : "topology_graph_json",
            "indexed" : "false",
            "property" : [
               "getSegmentShuntGraphJSON",
               "BFO:0000050",
               "BFO:0000066",
               "RO:0002211",
               "RO:0002212",
               "RO:0002213",
               "RO:0002215",
               "RO:0002216"
            ],
            "type" : "string",
            "display_name" : "Topology graph (JSON)"
         },
         {
            "display_name" : "Regulates transitivity graph (JSON)",
            "type" : "string",
            "property" : [
               "getLineageShuntGraphJSON",
               "BFO:0000050",
               "BFO:0000066",
               "RO:0002211",
               "RO:0002212",
               "RO:0002213",
               "RO:0002215",
               "RO:0002216"
            ],
            "description" : "JSON blob form of the local relation transitivity graph. Uses various relations (including regulates, occurs in, capable_of).",
            "searchable" : "false",
            "transform" : [],
            "cardinality" : "single",
            "required" : "false",
            "indexed" : "false",
            "id" : "regulates_transitivity_graph_json"
         },
         {
            "id" : "only_in_taxon",
            "indexed" : "true",
            "required" : "false",
            "searchable" : "true",
            "cardinality" : "single",
            "transform" : [],
            "description" : "Only in taxon.",
            "property" : [
               "getIdentifier"
            ],
            "type" : "string",
            "display_name" : "Only in taxon"
         },
         {
            "display_name" : "Only in taxon",
            "type" : "string",
            "property" : [
               "getLabel"
            ],
            "indexed" : "true",
            "id" : "only_in_taxon_label",
            "description" : "Only in taxon label.",
            "cardinality" : "single",
            "searchable" : "true",
            "transform" : [],
            "required" : "false"
         },
         {
            "indexed" : "true",
            "id" : "only_in_taxon_closure",
            "description" : "Only in taxon closure.",
            "transform" : [],
            "cardinality" : "multi",
            "searchable" : "false",
            "required" : "false",
            "display_name" : "Only in taxon (IDs)",
            "type" : "string",
            "property" : [
               "getRelationLabelClosure",
               "RO:0002160"
            ]
         },
         {
            "id" : "only_in_taxon_closure_label",
            "indexed" : "true",
            "searchable" : "true",
            "transform" : [],
            "cardinality" : "multi",
            "required" : "false",
            "description" : "Only in taxon label closure.",
            "property" : [
               "getRelationLabelClosure",
               "RO:0002160"
            ],
            "display_name" : "Only in taxon",
            "type" : "string"
         }
      ],
      "filter_weights" : "source^4.0 subset^3.0 regulates_closure_label^1.0 is_obsolete^0.0",
      "weight" : "40",
      "searchable_extension" : "_searchable",
      "document_category" : "ontology_class",
      "display_name" : "Ontology",
      "_outfile" : "/home/sjcarbon/local/src/git/amigo/metadata//ont-config.yaml",
      "fields_hash" : {
         "definition_xref" : {
            "property" : [
               "getDefXref"
            ],
            "type" : "string",
            "display_name" : "Def xref",
            "required" : "false",
            "cardinality" : "multi",
            "searchable" : "false",
            "transform" : [],
            "description" : "Definition cross-reference.",
            "id" : "definition_xref",
            "indexed" : "true"
         },
         "is_obsolete" : {
            "id" : "is_obsolete",
            "indexed" : "true",
            "transform" : [],
            "searchable" : "false",
            "cardinality" : "single",
            "required" : "false",
            "description" : "Is the term obsolete?",
            "property" : [
               "getIsObsoleteBinaryString"
            ],
            "display_name" : "Obsoletion",
            "type" : "boolean"
         },
         "regulates_transitivity_graph_json" : {
            "display_name" : "Regulates transitivity graph (JSON)",
            "type" : "string",
            "property" : [
               "getLineageShuntGraphJSON",
               "BFO:0000050",
               "BFO:0000066",
               "RO:0002211",
               "RO:0002212",
               "RO:0002213",
               "RO:0002215",
               "RO:0002216"
            ],
            "description" : "JSON blob form of the local relation transitivity graph. Uses various relations (including regulates, occurs in, capable_of).",
            "searchable" : "false",
            "transform" : [],
            "cardinality" : "single",
            "required" : "false",
            "indexed" : "false",
            "id" : "regulates_transitivity_graph_json"
         },
         "alternate_id" : {
            "type" : "string",
            "display_name" : "Alt ID",
            "property" : [
               "getAnnotationPropertyValues",
               "alt_id"
            ],
            "description" : "Alternate term identifier.",
            "required" : "false",
            "cardinality" : "multi",
            "searchable" : "false",
            "transform" : [],
            "indexed" : "true",
            "id" : "alternate_id"
         },
         "isa_partof_closure" : {
            "id" : "isa_partof_closure",
            "indexed" : "true",
            "required" : "false",
            "transform" : [],
            "searchable" : "false",
            "cardinality" : "multi",
            "description" : "Ancestral terms (is_a/part_of).",
            "property" : [
               "getRelationIDClosure",
               "BFO:0000050"
            ],
            "type" : "string",
            "display_name" : "Is-a/part-of"
         },
         "description" : {
            "required" : "false",
            "searchable" : "true",
            "cardinality" : "single",
            "transform" : [],
            "description" : "Term definition.",
            "id" : "description",
            "indexed" : "true",
            "property" : [
               "getDef"
            ],
            "type" : "string",
            "display_name" : "Definition"
         },
         "synonym" : {
            "type" : "string",
            "display_name" : "Synonyms",
            "property" : [
               "getOBOSynonymStrings"
            ],
            "description" : "Term synonyms.",
            "required" : "false",
            "searchable" : "true",
            "cardinality" : "multi",
            "transform" : [],
            "indexed" : "true",
            "id" : "synonym"
         },
         "database_xref" : {
            "property" : [
               "getXref"
            ],
            "display_name" : "DB xref",
            "type" : "string",
            "transform" : [],
            "searchable" : "false",
            "cardinality" : "multi",
            "required" : "false",
            "description" : "Database cross-reference.",
            "id" : "database_xref",
            "indexed" : "true"
         },
         "replaced_by" : {
            "property" : [
               "getAnnotationPropertyValues",
               "replaced_by"
            ],
            "display_name" : "Replaced By",
            "type" : "string",
            "transform" : [],
            "cardinality" : "multi",
            "searchable" : "false",
            "required" : "false",
            "description" : "Term that replaces this term.",
            "id" : "replaced_by",
            "indexed" : "true"
         },
         "regulates_closure_label" : {
            "description" : "Ancestral terms (regulates, occurs in, capable_of).",
            "required" : "false",
            "searchable" : "true",
            "cardinality" : "multi",
            "transform" : [],
            "indexed" : "true",
            "id" : "regulates_closure_label",
            "type" : "string",
            "display_name" : "Ancestor",
            "property" : [
               "getRelationLabelClosure",
               "BFO:0000050",
               "BFO:0000066",
               "RO:0002211",
               "RO:0002212",
               "RO:0002213",
               "RO:0002215",
               "RO:0002216"
            ]
         },
         "topology_graph_json" : {
            "required" : "false",
            "transform" : [],
            "cardinality" : "single",
            "searchable" : "false",
            "description" : "JSON blob form of the local stepwise topology graph. Uses various relations (including regulates, occurs in, capable_of).",
            "id" : "topology_graph_json",
            "indexed" : "false",
            "property" : [
               "getSegmentShuntGraphJSON",
               "BFO:0000050",
               "BFO:0000066",
               "RO:0002211",
               "RO:0002212",
               "RO:0002213",
               "RO:0002215",
               "RO:0002216"
            ],
            "type" : "string",
            "display_name" : "Topology graph (JSON)"
         },
         "annotation_class_label" : {
            "indexed" : "true",
            "id" : "annotation_class_label",
            "description" : "Identifier.",
            "required" : "false",
            "searchable" : "true",
            "cardinality" : "single",
            "transform" : [],
            "type" : "string",
            "display_name" : "Term",
            "property" : [
               "getLabel"
            ]
         },
         "only_in_taxon_label" : {
            "display_name" : "Only in taxon",
            "type" : "string",
            "property" : [
               "getLabel"
            ],
            "indexed" : "true",
            "id" : "only_in_taxon_label",
            "description" : "Only in taxon label.",
            "cardinality" : "single",
            "searchable" : "true",
            "transform" : [],
            "required" : "false"
         },
         "only_in_taxon_closure_label" : {
            "id" : "only_in_taxon_closure_label",
            "indexed" : "true",
            "searchable" : "true",
            "transform" : [],
            "cardinality" : "multi",
            "required" : "false",
            "description" : "Only in taxon label closure.",
            "property" : [
               "getRelationLabelClosure",
               "RO:0002160"
            ],
            "display_name" : "Only in taxon",
            "type" : "string"
         },
         "regulates_closure" : {
            "property" : [
               "getRelationIDClosure",
               "BFO:0000050",
               "BFO:0000066",
               "RO:0002211",
               "RO:0002212",
               "RO:0002213",
               "RO:0002215",
               "RO:0002216"
            ],
            "display_name" : "Ancestor",
            "type" : "string",
            "cardinality" : "multi",
            "searchable" : "false",
            "transform" : [],
            "required" : "false",
            "description" : "Ancestral terms (regulates, occurs in, capable_of).",
            "id" : "regulates_closure",
            "indexed" : "true"
         },
         "source" : {
            "property" : [
               "getNamespace"
            ],
            "type" : "string",
            "display_name" : "Ontology source",
            "required" : "false",
            "transform" : [],
            "searchable" : "false",
            "cardinality" : "single",
            "description" : "Term namespace.",
            "id" : "source",
            "indexed" : "true"
         },
         "only_in_taxon" : {
            "id" : "only_in_taxon",
            "indexed" : "true",
            "required" : "false",
            "searchable" : "true",
            "cardinality" : "single",
            "transform" : [],
            "description" : "Only in taxon.",
            "property" : [
               "getIdentifier"
            ],
            "type" : "string",
            "display_name" : "Only in taxon"
         },
         "only_in_taxon_closure" : {
            "indexed" : "true",
            "id" : "only_in_taxon_closure",
            "description" : "Only in taxon closure.",
            "transform" : [],
            "cardinality" : "multi",
            "searchable" : "false",
            "required" : "false",
            "display_name" : "Only in taxon (IDs)",
            "type" : "string",
            "property" : [
               "getRelationLabelClosure",
               "RO:0002160"
            ]
         },
         "id" : {
            "id" : "id",
            "indexed" : "true",
            "searchable" : "false",
            "transform" : [],
            "cardinality" : "single",
            "required" : "false",
            "description" : "Term identifier.",
            "property" : [
               "getIdentifier"
            ],
            "display_name" : "Acc",
            "type" : "string"
         },
         "subset" : {
            "property" : [
               "getSubsets"
            ],
            "display_name" : "Subset",
            "type" : "string",
            "id" : "subset",
            "indexed" : "true",
            "transform" : [],
            "cardinality" : "multi",
            "searchable" : "false",
            "required" : "false",
            "description" : "Special use collections of terms."
         },
         "consider" : {
            "type" : "string",
            "display_name" : "Consider",
            "property" : [
               "getAnnotationPropertyValues",
               "consider"
            ],
            "description" : "Others terms you might want to look at.",
            "required" : "false",
            "cardinality" : "multi",
            "transform" : [],
            "searchable" : "false",
            "indexed" : "true",
            "id" : "consider"
         },
         "comment" : {
            "property" : [
               "getComment"
            ],
            "type" : "string",
            "display_name" : "Comment",
            "id" : "comment",
            "indexed" : "true",
            "required" : "false",
            "cardinality" : "single",
            "searchable" : "true",
            "transform" : [],
            "description" : "Term comment."
         },
         "isa_partof_closure_label" : {
            "property" : [
               "getRelationLabelClosure",
               "BFO:0000050"
            ],
            "display_name" : "Is-a/part-of",
            "type" : "string",
            "id" : "isa_partof_closure_label",
            "indexed" : "true",
            "searchable" : "true",
            "cardinality" : "multi",
            "transform" : [],
            "required" : "false",
            "description" : "Ancestral terms (is_a/part_of)."
         },
         "annotation_class" : {
            "cardinality" : "single",
            "searchable" : "false",
            "transform" : [],
            "required" : "false",
            "description" : "Term identifier.",
            "id" : "annotation_class",
            "indexed" : "true",
            "property" : [
               "getIdentifier"
            ],
            "display_name" : "Term",
            "type" : "string"
         }
      }
   },
   "bbop_term_ac" : {
      "boost_weights" : "annotation_class^5.0 annotation_class_label^5.0 synonym^1.0 alternate_id^1.0",
      "_strict" : 0,
      "id" : "bbop_term_ac",
      "_infile" : "/home/sjcarbon/local/src/git/amigo/metadata//term-autocomplete-config.yaml",
      "result_weights" : "annotation_class^8.0 synonym^3.0 alternate_id^2.0",
      "schema_generating" : "false",
      "fields" : [
         {
            "display_name" : "Acc",
            "type" : "string",
            "property" : [],
            "description" : "Term acc/ID.",
            "cardinality" : "single",
            "searchable" : "false",
            "transform" : [],
            "required" : "false",
            "indexed" : "true",
            "id" : "id"
         },
         {
            "searchable" : "false",
            "cardinality" : "single",
            "transform" : [],
            "required" : "false",
            "description" : "Term acc/ID.",
            "id" : "annotation_class",
            "indexed" : "true",
            "property" : [],
            "display_name" : "Term",
            "type" : "string"
         },
         {
            "property" : [],
            "type" : "string",
            "display_name" : "Term",
            "id" : "annotation_class_label",
            "indexed" : "true",
            "required" : "false",
            "cardinality" : "single",
            "searchable" : "true",
            "transform" : [],
            "description" : "Common term name."
         },
         {
            "type" : "string",
            "display_name" : "Synonyms",
            "property" : [],
            "description" : "Term synonyms.",
            "required" : "false",
            "transform" : [],
            "searchable" : "true",
            "cardinality" : "multi",
            "indexed" : "true",
            "id" : "synonym"
         },
         {
            "description" : "Alternate term id.",
            "required" : "false",
            "cardinality" : "multi",
            "searchable" : "false",
            "transform" : [],
            "indexed" : "true",
            "id" : "alternate_id",
            "type" : "string",
            "display_name" : "Alt ID",
            "property" : []
         }
      ],
      "description" : "Easily find ontology classes in GO. For personality only - not a schema configuration.",
      "display_name" : "Term autocomplete",
      "document_category" : "ontology_class",
      "weight" : "-20",
      "searchable_extension" : "_searchable",
      "filter_weights" : "annotation_class^8.0 synonym^3.0 alternate_id^2.0",
      "fields_hash" : {
         "synonym" : {
            "type" : "string",
            "display_name" : "Synonyms",
            "property" : [],
            "description" : "Term synonyms.",
            "required" : "false",
            "transform" : [],
            "searchable" : "true",
            "cardinality" : "multi",
            "indexed" : "true",
            "id" : "synonym"
         },
         "annotation_class" : {
            "searchable" : "false",
            "cardinality" : "single",
            "transform" : [],
            "required" : "false",
            "description" : "Term acc/ID.",
            "id" : "annotation_class",
            "indexed" : "true",
            "property" : [],
            "display_name" : "Term",
            "type" : "string"
         },
         "alternate_id" : {
            "description" : "Alternate term id.",
            "required" : "false",
            "cardinality" : "multi",
            "searchable" : "false",
            "transform" : [],
            "indexed" : "true",
            "id" : "alternate_id",
            "type" : "string",
            "display_name" : "Alt ID",
            "property" : []
         },
         "id" : {
            "display_name" : "Acc",
            "type" : "string",
            "property" : [],
            "description" : "Term acc/ID.",
            "cardinality" : "single",
            "searchable" : "false",
            "transform" : [],
            "required" : "false",
            "indexed" : "true",
            "id" : "id"
         },
         "annotation_class_label" : {
            "property" : [],
            "type" : "string",
            "display_name" : "Term",
            "id" : "annotation_class_label",
            "indexed" : "true",
            "required" : "false",
            "cardinality" : "single",
            "searchable" : "true",
            "transform" : [],
            "description" : "Common term name."
         }
      },
      "_outfile" : "/home/sjcarbon/local/src/git/amigo/metadata//term-autocomplete-config.yaml"
   },
   "bioentity" : {
      "fields_hash" : {
         "bioentity_label" : {
            "property" : [],
            "type" : "string",
            "display_name" : "Label",
            "required" : "false",
            "searchable" : "true",
            "cardinality" : "single",
            "transform" : [],
            "description" : "Symbol or name.",
            "id" : "bioentity_label",
            "indexed" : "true"
         },
         "source" : {
            "property" : [],
            "type" : "string",
            "display_name" : "Source",
            "required" : "false",
            "transform" : [],
            "cardinality" : "single",
            "searchable" : "false",
            "description" : "Database source.",
            "id" : "source",
            "indexed" : "true"
         },
         "id" : {
            "property" : [],
            "type" : "string",
            "display_name" : "Acc",
            "id" : "id",
            "indexed" : "true",
            "required" : "false",
            "cardinality" : "single",
            "searchable" : "false",
            "transform" : [],
            "description" : "Gene of gene product ID."
         },
         "bioentity" : {
            "required" : "false",
=======
   "annotation" : {
      "display_name" : "Annotations",
      "schema_generating" : "true",
      "fields" : [
         {
            "cardinality" : "single",
            "indexed" : "true",
            "required" : "false",
            "type" : "string",
            "description" : "A unique (and internal) combination of bioentity and ontology class.",
            "id" : "id",
            "property" : [],
            "display_name" : "Acc",
            "transform" : [],
            "searchable" : "false"
         },
         {
            "id" : "source",
            "transform" : [],
            "searchable" : "false",
            "display_name" : "Source",
            "property" : [],
            "required" : "false",
            "cardinality" : "single",
            "indexed" : "true",
            "type" : "string",
            "description" : "Database source."
         },
         {
            "display_name" : "Type class id",
            "property" : [],
            "searchable" : "false",
            "transform" : [],
            "id" : "type",
            "description" : "Type class.",
            "type" : "string",
            "indexed" : "true",
            "cardinality" : "single",
            "required" : "false"
         },
         {
            "required" : "false",
            "cardinality" : "single",
            "indexed" : "true",
            "description" : "Date of assignment.",
            "type" : "string",
            "id" : "date",
            "searchable" : "false",
            "transform" : [],
            "display_name" : "Date",
            "property" : []
         },
         {
            "id" : "assigned_by",
            "display_name" : "Assigned by",
            "property" : [],
            "searchable" : "false",
            "transform" : [],
            "indexed" : "true",
            "cardinality" : "single",
            "required" : "false",
            "description" : "Annotations assigned by group.",
            "type" : "string"
         },
         {
            "description" : "Rational for redundancy of annotation.",
            "type" : "string",
            "indexed" : "true",
            "cardinality" : "single",
            "required" : "false",
            "display_name" : "Redundant for",
            "property" : [],
            "searchable" : "false",
            "transform" : [],
            "id" : "is_redundant_for"
         },
         {
            "cardinality" : "single",
            "indexed" : "true",
            "required" : "false",
            "type" : "string",
            "description" : "Taxonomic group.",
            "id" : "taxon",
            "property" : [],
            "display_name" : "Taxon",
            "transform" : [],
            "searchable" : "false"
         },
         {
            "indexed" : "true",
            "cardinality" : "single",
            "required" : "false",
            "description" : "Taxonomic group and ancestral groups.",
            "type" : "string",
            "id" : "taxon_label",
            "property" : [],
            "display_name" : "Taxon",
            "searchable" : "true",
            "transform" : []
         },
         {
            "required" : "false",
            "cardinality" : "multi",
            "indexed" : "true",
            "type" : "string",
            "description" : "Taxonomic group and ancestral groups.",
            "id" : "taxon_closure",
            "transform" : [],
            "searchable" : "false",
            "display_name" : "Taxon",
            "property" : []
         },
         {
            "id" : "taxon_closure_label",
            "property" : [],
            "display_name" : "Taxon",
            "searchable" : "true",
            "transform" : [],
            "cardinality" : "multi",
            "indexed" : "true",
            "required" : "false",
            "description" : "Taxonomic group and ancestral groups.",
            "type" : "string"
         },
         {
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "single",
            "description" : "Secondary taxon.",
            "type" : "string",
            "id" : "secondary_taxon",
            "searchable" : "false",
            "transform" : [],
            "display_name" : "Secondary taxon",
            "property" : []
         },
         {
            "id" : "secondary_taxon_label",
            "searchable" : "true",
            "transform" : [],
            "property" : [],
            "display_name" : "Secondary taxon",
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "single",
            "description" : "Secondary taxon.",
            "type" : "string"
         },
         {
            "cardinality" : "multi",
            "indexed" : "true",
            "required" : "false",
            "description" : "Secondary taxon closure.",
            "type" : "string",
            "id" : "secondary_taxon_closure",
            "display_name" : "Secondary taxon",
            "property" : [],
            "searchable" : "false",
            "transform" : []
         },
         {
            "description" : "Secondary taxon closure.",
            "type" : "string",
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "multi",
            "searchable" : "true",
            "transform" : [],
            "property" : [],
            "display_name" : "Secondary taxon",
            "id" : "secondary_taxon_closure_label"
         },
         {
            "type" : "string",
            "description" : "Annotations for this term or its children (over is_a/part_of).",
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "multi",
            "transform" : [],
            "searchable" : "false",
            "property" : [],
            "display_name" : "Involved in",
            "id" : "isa_partof_closure"
         },
         {
            "searchable" : "true",
            "transform" : [],
            "property" : [],
            "display_name" : "Involved in",
            "id" : "isa_partof_closure_label",
            "description" : "Annotations for this term or its children (over is_a/part_of).",
            "type" : "string",
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "multi"
         },
         {
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "multi",
            "description" : "Annotations for this term or its children (over regulates).",
            "type" : "string",
            "id" : "regulates_closure",
            "searchable" : "false",
            "transform" : [],
            "display_name" : "Inferred annotation",
            "property" : []
         },
         {
            "cardinality" : "multi",
            "indexed" : "true",
            "required" : "false",
            "description" : "Annotations for this term or its children (over regulates).",
            "type" : "string",
            "id" : "regulates_closure_label",
            "display_name" : "Inferred annotation",
            "property" : [],
            "searchable" : "true",
            "transform" : []
         },
         {
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "multi",
            "description" : "Closure of ids/accs over has_participant.",
            "type" : "string",
            "id" : "has_participant_closure",
            "searchable" : "false",
            "transform" : [],
            "property" : [],
            "display_name" : "Has participant (IDs)"
         },
         {
            "display_name" : "Has participant",
            "property" : [],
            "searchable" : "true",
            "transform" : [],
            "id" : "has_participant_closure_label",
            "description" : "Closure of labels over has_participant.",
            "type" : "string",
            "indexed" : "true",
            "cardinality" : "multi",
            "required" : "false"
         },
         {
            "transform" : [],
            "searchable" : "false",
            "property" : [],
            "display_name" : "Synonym",
            "id" : "synonym",
            "type" : "string",
            "description" : "Gene or gene product synonyms.",
            "required" : "false",
            "cardinality" : "multi",
            "indexed" : "true"
         },
         {
            "id" : "bioentity",
            "property" : [],
            "display_name" : "Gene/product",
            "searchable" : "false",
            "transform" : [],
            "indexed" : "true",
            "cardinality" : "single",
            "required" : "false",
            "description" : "Gene or gene product identifiers.",
            "type" : "string"
         },
         {
            "required" : "false",
            "cardinality" : "single",
            "indexed" : "true",
            "type" : "string",
            "description" : "Gene or gene product identifiers.",
            "id" : "bioentity_label",
            "transform" : [],
            "searchable" : "true",
            "property" : [],
            "display_name" : "Gene/product"
         },
         {
            "id" : "bioentity_name",
            "transform" : [],
            "searchable" : "true",
            "property" : [],
            "display_name" : "Gene/product name",
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "single",
            "type" : "string",
            "description" : "The full name of the gene or gene product."
         },
         {
            "id" : "bioentity_internal_id",
            "display_name" : "This should not be displayed",
            "property" : [],
            "searchable" : "false",
            "transform" : [],
            "indexed" : "false",
            "cardinality" : "single",
            "required" : "false",
            "description" : "The bioentity ID used at the database of origin.",
            "type" : "string"
         },
         {
            "id" : "qualifier",
            "property" : [],
            "display_name" : "Qualifier",
            "transform" : [],
            "searchable" : "false",
            "indexed" : "true",
            "cardinality" : "multi",
            "required" : "false",
            "type" : "string",
            "description" : "Annotation qualifier."
         },
         {
            "required" : "false",
            "cardinality" : "single",
            "indexed" : "true",
            "type" : "string",
            "description" : "Direct annotations.",
            "id" : "annotation_class",
            "transform" : [],
            "searchable" : "false",
            "property" : [],
            "display_name" : "Direct annotation"
         },
         {
            "id" : "annotation_class_label",
            "transform" : [],
            "searchable" : "true",
            "display_name" : "Direct annotation",
            "property" : [],
            "required" : "false",
            "cardinality" : "single",
            "indexed" : "true",
            "type" : "string",
            "description" : "Direct annotations."
         },
         {
            "id" : "aspect",
            "searchable" : "false",
            "transform" : [],
            "display_name" : "Ontology (aspect)",
            "property" : [],
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "single",
            "description" : "Ontology aspect.",
            "type" : "string"
         },
         {
            "type" : "string",
            "description" : "Biological isoform.",
            "cardinality" : "single",
            "indexed" : "true",
            "required" : "false",
            "display_name" : "Isoform",
            "property" : [],
            "transform" : [],
            "searchable" : "false",
            "id" : "bioentity_isoform"
         },
         {
            "description" : "Evidence type.",
            "type" : "string",
            "cardinality" : "single",
            "indexed" : "true",
            "required" : "false",
            "display_name" : "Evidence",
            "property" : [],
            "searchable" : "false",
            "transform" : [],
            "id" : "evidence_type"
         },
         {
            "description" : "All evidence (evidence closure) for this annotation",
            "type" : "string",
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "multi",
            "searchable" : "false",
            "transform" : [],
            "property" : [],
            "display_name" : "Evidence type",
            "id" : "evidence_type_closure"
         },
         {
            "id" : "evidence_with",
            "display_name" : "Evidence with",
            "property" : [],
            "transform" : [],
            "searchable" : "false",
            "indexed" : "true",
            "cardinality" : "multi",
            "required" : "false",
            "type" : "string",
            "description" : "Evidence with/from."
         },
         {
            "indexed" : "true",
            "cardinality" : "multi",
            "required" : "false",
            "description" : "Database reference.",
            "type" : "string",
            "id" : "reference",
            "property" : [],
            "display_name" : "Reference",
            "searchable" : "false",
            "transform" : []
         },
         {
            "type" : "string",
            "description" : "Extension class for the annotation.",
            "cardinality" : "multi",
            "indexed" : "true",
            "required" : "false",
            "property" : [],
            "display_name" : "Annotation extension",
            "transform" : [],
            "searchable" : "false",
            "id" : "annotation_extension_class"
         },
         {
            "id" : "annotation_extension_class_label",
            "transform" : [],
            "searchable" : "true",
            "display_name" : "Annotation extension",
            "property" : [],
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "multi",
            "type" : "string",
            "description" : "Extension class for the annotation."
         },
         {
            "id" : "annotation_extension_class_closure",
            "property" : [],
            "display_name" : "Annotation extension",
            "transform" : [],
            "searchable" : "false",
            "indexed" : "true",
            "cardinality" : "multi",
            "required" : "false",
            "type" : "string",
            "description" : "Extension class for the annotation."
         },
         {
            "indexed" : "true",
            "cardinality" : "multi",
            "required" : "false",
            "description" : "Extension class for the annotation.",
            "type" : "string",
            "id" : "annotation_extension_class_closure_label",
            "display_name" : "Annotation extension",
            "property" : [],
            "searchable" : "true",
            "transform" : []
         },
         {
            "type" : "string",
            "description" : "Extension class for the annotation (JSON).",
            "indexed" : "true",
            "cardinality" : "multi",
            "required" : "false",
            "display_name" : "Annotation extension",
            "property" : [],
            "transform" : [],
            "searchable" : "false",
            "id" : "annotation_extension_json"
         },
         {
            "id" : "panther_family",
            "searchable" : "true",
            "transform" : [],
            "display_name" : "PANTHER family",
            "property" : [],
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "single",
            "description" : "PANTHER families that are associated with this entity.",
            "type" : "string"
         },
         {
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "single",
            "type" : "string",
            "description" : "PANTHER families that are associated with this entity.",
            "id" : "panther_family_label",
            "transform" : [],
            "searchable" : "true",
            "display_name" : "PANTHER family",
            "property" : []
         }
      ],
      "result_weights" : "bioentity^7.0 bioentity_name^6.0 qualifier^5.0 annotation_class^4.7 annotation_extension_json^4.5 source^4.0 taxon^3.0 evidence_type^2.5 evidence_with^2.0 panther_family^1.5 bioentity_isoform^0.5 reference^0.25",
      "document_category" : "annotation",
      "weight" : "20",
      "id" : "annotation",
      "boost_weights" : "annotation_class^2.0 annotation_class_label^1.0 bioentity^2.0 bioentity_label^1.0 bioentity_name^1.0 annotation_extension_class^2.0 annotation_extension_class_label^1.0 reference^1.0 panther_family^1.0 panther_family_label^1.0 bioentity_isoform^1.0 regulates_closure^1.0 regulates_closure_label^1.0",
      "searchable_extension" : "_searchable",
      "filter_weights" : "source^7.0 assigned_by^6.5 aspect^6.25 evidence_type_closure^6.0 panther_family_label^5.5 qualifier^5.25 taxon_closure_label^5.0 annotation_class_label^4.5 regulates_closure_label^3.0 annotation_extension_class_closure_label^2.0",
      "_outfile" : "./metadata/ann-config.yaml",
      "fields_hash" : {
         "qualifier" : {
            "id" : "qualifier",
            "property" : [],
            "display_name" : "Qualifier",
            "transform" : [],
            "searchable" : "false",
            "indexed" : "true",
            "cardinality" : "multi",
            "required" : "false",
            "type" : "string",
            "description" : "Annotation qualifier."
         },
         "date" : {
            "required" : "false",
            "cardinality" : "single",
            "indexed" : "true",
            "description" : "Date of assignment.",
            "type" : "string",
            "id" : "date",
            "searchable" : "false",
            "transform" : [],
            "display_name" : "Date",
            "property" : []
         },
         "secondary_taxon_closure" : {
            "cardinality" : "multi",
            "indexed" : "true",
            "required" : "false",
            "description" : "Secondary taxon closure.",
            "type" : "string",
            "id" : "secondary_taxon_closure",
            "display_name" : "Secondary taxon",
            "property" : [],
            "searchable" : "false",
            "transform" : []
         },
         "taxon_label" : {
            "indexed" : "true",
            "cardinality" : "single",
            "required" : "false",
            "description" : "Taxonomic group and ancestral groups.",
            "type" : "string",
            "id" : "taxon_label",
            "property" : [],
            "display_name" : "Taxon",
            "searchable" : "true",
            "transform" : []
         },
         "assigned_by" : {
            "id" : "assigned_by",
            "display_name" : "Assigned by",
            "property" : [],
            "searchable" : "false",
            "transform" : [],
            "indexed" : "true",
            "cardinality" : "single",
            "required" : "false",
            "description" : "Annotations assigned by group.",
            "type" : "string"
         },
         "has_participant_closure" : {
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "multi",
            "description" : "Closure of ids/accs over has_participant.",
            "type" : "string",
            "id" : "has_participant_closure",
            "searchable" : "false",
            "transform" : [],
            "property" : [],
            "display_name" : "Has participant (IDs)"
         },
         "has_participant_closure_label" : {
            "display_name" : "Has participant",
            "property" : [],
            "searchable" : "true",
            "transform" : [],
            "id" : "has_participant_closure_label",
            "description" : "Closure of labels over has_participant.",
            "type" : "string",
            "indexed" : "true",
            "cardinality" : "multi",
            "required" : "false"
         },
         "secondary_taxon_closure_label" : {
            "description" : "Secondary taxon closure.",
            "type" : "string",
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "multi",
            "searchable" : "true",
            "transform" : [],
            "property" : [],
            "display_name" : "Secondary taxon",
            "id" : "secondary_taxon_closure_label"
         },
         "aspect" : {
            "id" : "aspect",
            "searchable" : "false",
            "transform" : [],
            "display_name" : "Ontology (aspect)",
            "property" : [],
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "single",
            "description" : "Ontology aspect.",
            "type" : "string"
         },
         "synonym" : {
            "transform" : [],
            "searchable" : "false",
            "property" : [],
            "display_name" : "Synonym",
            "id" : "synonym",
            "type" : "string",
            "description" : "Gene or gene product synonyms.",
            "required" : "false",
            "cardinality" : "multi",
            "indexed" : "true"
         },
         "evidence_type_closure" : {
            "description" : "All evidence (evidence closure) for this annotation",
            "type" : "string",
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "multi",
            "searchable" : "false",
            "transform" : [],
            "property" : [],
            "display_name" : "Evidence type",
            "id" : "evidence_type_closure"
         },
         "annotation_extension_class_label" : {
            "id" : "annotation_extension_class_label",
            "transform" : [],
            "searchable" : "true",
            "display_name" : "Annotation extension",
            "property" : [],
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "multi",
            "type" : "string",
            "description" : "Extension class for the annotation."
         },
         "type" : {
            "display_name" : "Type class id",
            "property" : [],
            "searchable" : "false",
            "transform" : [],
            "id" : "type",
            "description" : "Type class.",
            "type" : "string",
            "indexed" : "true",
            "cardinality" : "single",
            "required" : "false"
         },
         "isa_partof_closure_label" : {
            "searchable" : "true",
            "transform" : [],
            "property" : [],
            "display_name" : "Involved in",
            "id" : "isa_partof_closure_label",
            "description" : "Annotations for this term or its children (over is_a/part_of).",
            "type" : "string",
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "multi"
         },
         "annotation_class_label" : {
            "id" : "annotation_class_label",
            "transform" : [],
            "searchable" : "true",
            "display_name" : "Direct annotation",
            "property" : [],
            "required" : "false",
            "cardinality" : "single",
            "indexed" : "true",
            "type" : "string",
            "description" : "Direct annotations."
         },
         "is_redundant_for" : {
            "description" : "Rational for redundancy of annotation.",
            "type" : "string",
            "indexed" : "true",
            "cardinality" : "single",
            "required" : "false",
            "display_name" : "Redundant for",
            "property" : [],
            "searchable" : "false",
            "transform" : [],
            "id" : "is_redundant_for"
         },
         "evidence_with" : {
            "id" : "evidence_with",
            "display_name" : "Evidence with",
            "property" : [],
>>>>>>> issue-124
            "transform" : [],
            "cardinality" : "single",
            "searchable" : "false",
            "description" : "Gene or gene product ID.",
            "id" : "bioentity",
            "indexed" : "true",
<<<<<<< HEAD
            "property" : [],
            "type" : "string",
            "display_name" : "Acc"
         },
         "taxon_closure_label" : {
            "description" : "Taxonomic group and ancestral groups.",
            "required" : "false",
            "searchable" : "true",
            "cardinality" : "multi",
            "transform" : [],
            "indexed" : "true",
            "id" : "taxon_closure_label",
            "type" : "string",
            "display_name" : "Taxon",
            "property" : []
         },
         "isa_partof_closure_label" : {
            "type" : "string",
            "display_name" : "Involved in",
            "property" : [],
            "description" : "Closure of labels over isa and partof.",
            "required" : "false",
            "cardinality" : "multi",
            "searchable" : "true",
            "transform" : [],
            "indexed" : "true",
            "id" : "isa_partof_closure_label"
         },
         "type" : {
            "id" : "type",
            "indexed" : "true",
            "cardinality" : "single",
            "transform" : [],
            "searchable" : "false",
            "required" : "false",
            "description" : "Type class.",
            "property" : [],
            "display_name" : "Type",
            "type" : "string"
         },
         "bioentity_name" : {
            "description" : "The full name of the gene product.",
            "cardinality" : "single",
            "transform" : [],
            "searchable" : "true",
            "required" : "false",
            "indexed" : "true",
            "id" : "bioentity_name",
            "display_name" : "Name",
            "type" : "string",
            "property" : []
         },
         "taxon_label" : {
            "display_name" : "Taxon",
            "type" : "string",
            "property" : [],
            "description" : "Taxonomic group",
            "searchable" : "true",
            "cardinality" : "single",
            "transform" : [],
            "required" : "false",
            "indexed" : "true",
            "id" : "taxon_label"
         },
         "phylo_graph_json" : {
            "property" : [],
            "display_name" : "This should not be displayed",
            "type" : "string",
            "searchable" : "false",
            "cardinality" : "single",
            "transform" : [],
            "required" : "false",
            "description" : "JSON blob form of the phylogenic tree.",
            "id" : "phylo_graph_json",
            "indexed" : "false"
         },
         "taxon" : {
            "display_name" : "Taxon",
            "type" : "string",
            "property" : [],
            "description" : "Taxonomic group",
            "searchable" : "false",
            "cardinality" : "single",
            "transform" : [],
            "required" : "false",
            "indexed" : "true",
            "id" : "taxon"
         },
         "regulates_closure" : {
            "type" : "string",
            "display_name" : "Inferred annotation",
            "property" : [],
            "description" : "Bioentities associated with this term or its children (over regulates).",
            "required" : "false",
            "searchable" : "false",
            "cardinality" : "multi",
            "transform" : [],
            "indexed" : "true",
            "id" : "regulates_closure"
         },
         "panther_family" : {
            "cardinality" : "single",
            "searchable" : "true",
            "transform" : [],
            "required" : "false",
            "description" : "PANTHER families that are associated with this entity.",
            "id" : "panther_family",
            "indexed" : "true",
            "property" : [],
            "display_name" : "PANTHER family",
            "type" : "string"
         },
         "database_xref" : {
            "id" : "database_xref",
            "indexed" : "true",
            "searchable" : "false",
            "cardinality" : "multi",
            "transform" : [],
            "required" : "false",
            "description" : "Database cross-reference.",
            "property" : [],
            "display_name" : "DB xref",
            "type" : "string"
         },
         "isa_partof_closure" : {
            "property" : [],
            "display_name" : "Involved in",
            "type" : "string",
            "id" : "isa_partof_closure",
            "indexed" : "true",
            "cardinality" : "multi",
            "searchable" : "false",
            "transform" : [],
            "required" : "false",
            "description" : "Closure of ids/accs over isa and partof."
         },
         "synonym" : {
            "description" : "Gene product synonyms.",
            "required" : "false",
            "searchable" : "false",
            "transform" : [],
            "cardinality" : "multi",
            "indexed" : "true",
            "id" : "synonym",
            "type" : "string",
            "display_name" : "Synonyms",
            "property" : []
         },
         "regulates_closure_label" : {
            "property" : [],
            "type" : "string",
            "display_name" : "Inferred annotation",
            "id" : "regulates_closure_label",
            "indexed" : "true",
            "required" : "false",
            "searchable" : "true",
            "transform" : [],
            "cardinality" : "multi",
            "description" : "Bioentities associated with this term or its children (over regulates)."
         },
         "bioentity_internal_id" : {
            "id" : "bioentity_internal_id",
            "indexed" : "false",
            "required" : "false",
            "cardinality" : "single",
            "searchable" : "false",
            "transform" : [],
            "description" : "The bioentity ID used at the database of origin.",
            "property" : [],
            "type" : "string",
            "display_name" : "This should not be displayed"
         },
         "panther_family_label" : {
            "property" : [],
            "display_name" : "PANTHER family",
            "type" : "string",
            "id" : "panther_family_label",
            "indexed" : "true",
            "cardinality" : "single",
            "transform" : [],
            "searchable" : "true",
            "required" : "false",
            "description" : "PANTHER families that are associated with this entity."
         },
         "annotation_class_list" : {
            "id" : "annotation_class_list",
            "indexed" : "true",
            "transform" : [],
            "cardinality" : "multi",
            "searchable" : "false",
            "required" : "false",
            "description" : "Direct annotations.",
            "property" : [],
            "display_name" : "Direct annotation",
            "type" : "string"
         },
         "annotation_class_list_label" : {
            "id" : "annotation_class_list_label",
            "indexed" : "true",
            "transform" : [],
            "cardinality" : "multi",
            "searchable" : "false",
            "required" : "false",
            "description" : "Direct annotations.",
            "property" : [],
            "display_name" : "Direct annotation",
            "type" : "string"
         },
         "taxon_closure" : {
            "property" : [],
            "display_name" : "Taxon",
            "type" : "string",
            "id" : "taxon_closure",
            "indexed" : "true",
            "transform" : [],
            "searchable" : "false",
            "cardinality" : "multi",
            "required" : "false",
            "description" : "Taxonomic group and ancestral groups."
         }
      },
      "_outfile" : "/home/sjcarbon/local/src/git/amigo/metadata//bio-config.yaml",
      "document_category" : "bioentity",
      "display_name" : "Genes and gene products",
      "filter_weights" : "source^7.0 type^6.0 panther_family_label^5.0 annotation_class_list_label^3.5 taxon_closure_label^4.0 regulates_closure_label^2.0",
      "weight" : "30",
      "searchable_extension" : "_searchable",
      "description" : "Genes and gene products associated with GO terms.",
      "fields" : [
         {
            "property" : [],
            "type" : "string",
            "display_name" : "Acc",
            "id" : "id",
            "indexed" : "true",
            "required" : "false",
            "cardinality" : "single",
            "searchable" : "false",
            "transform" : [],
            "description" : "Gene of gene product ID."
         },
         {
            "required" : "false",
            "transform" : [],
            "cardinality" : "single",
            "searchable" : "false",
            "description" : "Gene or gene product ID.",
            "id" : "bioentity",
            "indexed" : "true",
            "property" : [],
            "type" : "string",
            "display_name" : "Acc"
         },
         {
            "property" : [],
            "type" : "string",
            "display_name" : "Label",
            "required" : "false",
            "searchable" : "true",
            "cardinality" : "single",
            "transform" : [],
            "description" : "Symbol or name.",
            "id" : "bioentity_label",
            "indexed" : "true"
         },
         {
            "description" : "The full name of the gene product.",
            "cardinality" : "single",
            "transform" : [],
            "searchable" : "true",
            "required" : "false",
            "indexed" : "true",
            "id" : "bioentity_name",
            "display_name" : "Name",
            "type" : "string",
            "property" : []
         },
         {
            "id" : "bioentity_internal_id",
            "indexed" : "false",
            "required" : "false",
            "cardinality" : "single",
            "searchable" : "false",
            "transform" : [],
            "description" : "The bioentity ID used at the database of origin.",
            "property" : [],
            "type" : "string",
            "display_name" : "This should not be displayed"
         },
         {
            "id" : "type",
            "indexed" : "true",
            "cardinality" : "single",
            "transform" : [],
            "searchable" : "false",
            "required" : "false",
            "description" : "Type class.",
            "property" : [],
            "display_name" : "Type",
            "type" : "string"
         },
         {
            "display_name" : "Taxon",
            "type" : "string",
            "property" : [],
            "description" : "Taxonomic group",
            "searchable" : "false",
            "cardinality" : "single",
            "transform" : [],
=======
            "cardinality" : "multi",
            "required" : "false",
            "type" : "string",
            "description" : "Evidence with/from."
         },
         "bioentity_internal_id" : {
            "id" : "bioentity_internal_id",
            "display_name" : "This should not be displayed",
            "property" : [],
            "searchable" : "false",
            "transform" : [],
            "indexed" : "false",
            "cardinality" : "single",
            "required" : "false",
            "description" : "The bioentity ID used at the database of origin.",
            "type" : "string"
         },
         "evidence_type" : {
            "description" : "Evidence type.",
            "type" : "string",
            "cardinality" : "single",
            "indexed" : "true",
            "required" : "false",
            "display_name" : "Evidence",
            "property" : [],
            "searchable" : "false",
            "transform" : [],
            "id" : "evidence_type"
         },
         "annotation_extension_json" : {
            "type" : "string",
            "description" : "Extension class for the annotation (JSON).",
            "indexed" : "true",
            "cardinality" : "multi",
            "required" : "false",
            "display_name" : "Annotation extension",
            "property" : [],
            "transform" : [],
            "searchable" : "false",
            "id" : "annotation_extension_json"
         },
         "regulates_closure_label" : {
            "cardinality" : "multi",
            "indexed" : "true",
            "required" : "false",
            "description" : "Annotations for this term or its children (over regulates).",
            "type" : "string",
            "id" : "regulates_closure_label",
            "display_name" : "Inferred annotation",
            "property" : [],
            "searchable" : "true",
            "transform" : []
         },
         "id" : {
            "cardinality" : "single",
            "indexed" : "true",
            "required" : "false",
            "type" : "string",
            "description" : "A unique (and internal) combination of bioentity and ontology class.",
            "id" : "id",
            "property" : [],
            "display_name" : "Acc",
            "transform" : [],
            "searchable" : "false"
         },
         "annotation_extension_class_closure_label" : {
            "indexed" : "true",
            "cardinality" : "multi",
            "required" : "false",
            "description" : "Extension class for the annotation.",
            "type" : "string",
            "id" : "annotation_extension_class_closure_label",
            "display_name" : "Annotation extension",
            "property" : [],
            "searchable" : "true",
            "transform" : []
         },
         "annotation_class" : {
            "required" : "false",
            "cardinality" : "single",
            "indexed" : "true",
            "type" : "string",
            "description" : "Direct annotations.",
            "id" : "annotation_class",
            "transform" : [],
            "searchable" : "false",
            "property" : [],
            "display_name" : "Direct annotation"
         },
         "annotation_extension_class" : {
            "type" : "string",
            "description" : "Extension class for the annotation.",
            "cardinality" : "multi",
            "indexed" : "true",
            "required" : "false",
            "property" : [],
            "display_name" : "Annotation extension",
            "transform" : [],
            "searchable" : "false",
            "id" : "annotation_extension_class"
         },
         "taxon_closure_label" : {
            "id" : "taxon_closure_label",
            "property" : [],
            "display_name" : "Taxon",
            "searchable" : "true",
            "transform" : [],
            "cardinality" : "multi",
            "indexed" : "true",
            "required" : "false",
            "description" : "Taxonomic group and ancestral groups.",
            "type" : "string"
         },
         "annotation_extension_class_closure" : {
            "id" : "annotation_extension_class_closure",
            "property" : [],
            "display_name" : "Annotation extension",
            "transform" : [],
            "searchable" : "false",
            "indexed" : "true",
            "cardinality" : "multi",
            "required" : "false",
            "type" : "string",
            "description" : "Extension class for the annotation."
         },
         "secondary_taxon_label" : {
            "id" : "secondary_taxon_label",
            "searchable" : "true",
            "transform" : [],
            "property" : [],
            "display_name" : "Secondary taxon",
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "single",
            "description" : "Secondary taxon.",
            "type" : "string"
         },
         "bioentity_isoform" : {
            "type" : "string",
            "description" : "Biological isoform.",
            "cardinality" : "single",
            "indexed" : "true",
            "required" : "false",
            "display_name" : "Isoform",
            "property" : [],
            "transform" : [],
            "searchable" : "false",
            "id" : "bioentity_isoform"
         },
         "reference" : {
            "indexed" : "true",
            "cardinality" : "multi",
            "required" : "false",
            "description" : "Database reference.",
            "type" : "string",
            "id" : "reference",
            "property" : [],
            "display_name" : "Reference",
            "searchable" : "false",
            "transform" : []
         },
         "panther_family" : {
            "id" : "panther_family",
            "searchable" : "true",
            "transform" : [],
            "display_name" : "PANTHER family",
            "property" : [],
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "single",
            "description" : "PANTHER families that are associated with this entity.",
            "type" : "string"
         },
         "bioentity_name" : {
            "id" : "bioentity_name",
            "transform" : [],
            "searchable" : "true",
            "property" : [],
            "display_name" : "Gene/product name",
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "single",
            "type" : "string",
            "description" : "The full name of the gene or gene product."
         },
         "isa_partof_closure" : {
            "type" : "string",
            "description" : "Annotations for this term or its children (over is_a/part_of).",
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "multi",
            "transform" : [],
            "searchable" : "false",
            "property" : [],
            "display_name" : "Involved in",
            "id" : "isa_partof_closure"
         },
         "bioentity" : {
            "id" : "bioentity",
            "property" : [],
            "display_name" : "Gene/product",
            "searchable" : "false",
            "transform" : [],
            "indexed" : "true",
            "cardinality" : "single",
            "required" : "false",
            "description" : "Gene or gene product identifiers.",
            "type" : "string"
         },
         "taxon_closure" : {
            "required" : "false",
            "cardinality" : "multi",
            "indexed" : "true",
            "type" : "string",
            "description" : "Taxonomic group and ancestral groups.",
            "id" : "taxon_closure",
            "transform" : [],
            "searchable" : "false",
            "display_name" : "Taxon",
            "property" : []
         },
         "taxon" : {
            "cardinality" : "single",
            "indexed" : "true",
            "required" : "false",
            "type" : "string",
            "description" : "Taxonomic group.",
            "id" : "taxon",
            "property" : [],
            "display_name" : "Taxon",
            "transform" : [],
            "searchable" : "false"
         },
         "regulates_closure" : {
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "multi",
            "description" : "Annotations for this term or its children (over regulates).",
            "type" : "string",
            "id" : "regulates_closure",
            "searchable" : "false",
            "transform" : [],
            "display_name" : "Inferred annotation",
            "property" : []
         },
         "panther_family_label" : {
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "single",
            "type" : "string",
            "description" : "PANTHER families that are associated with this entity.",
            "id" : "panther_family_label",
            "transform" : [],
            "searchable" : "true",
            "display_name" : "PANTHER family",
            "property" : []
         },
         "secondary_taxon" : {
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "single",
            "description" : "Secondary taxon.",
            "type" : "string",
            "id" : "secondary_taxon",
            "searchable" : "false",
            "transform" : [],
            "display_name" : "Secondary taxon",
            "property" : []
         },
         "bioentity_label" : {
            "required" : "false",
            "cardinality" : "single",
            "indexed" : "true",
            "type" : "string",
            "description" : "Gene or gene product identifiers.",
            "id" : "bioentity_label",
            "transform" : [],
            "searchable" : "true",
            "property" : [],
            "display_name" : "Gene/product"
         },
         "source" : {
            "id" : "source",
            "transform" : [],
            "searchable" : "false",
            "display_name" : "Source",
            "property" : [],
            "required" : "false",
            "cardinality" : "single",
            "indexed" : "true",
            "type" : "string",
            "description" : "Database source."
         }
      },
      "description" : "Associations between GO terms and genes or gene products.",
      "_strict" : 0,
      "_infile" : "./metadata/ann-config.yaml"
   },
   "ontology" : {
      "fields" : [
         {
            "indexed" : "true",
            "cardinality" : "single",
            "required" : "false",
            "type" : "string",
            "description" : "Term identifier.",
            "id" : "id",
            "display_name" : "Acc",
            "property" : [
               "getIdentifier"
            ],
            "transform" : [],
            "searchable" : "false"
         },
         {
            "type" : "string",
            "description" : "Term identifier.",
            "cardinality" : "single",
            "indexed" : "true",
            "required" : "false",
            "display_name" : "Term",
            "property" : [
               "getIdentifier"
            ],
            "transform" : [],
            "searchable" : "false",
            "id" : "annotation_class"
         },
         {
            "cardinality" : "single",
            "indexed" : "true",
            "required" : "false",
            "description" : "Identifier.",
            "type" : "string",
            "id" : "annotation_class_label",
            "display_name" : "Term",
            "property" : [
               "getLabel"
            ],
            "searchable" : "true",
            "transform" : []
         },
         {
            "property" : [
               "getDef"
            ],
            "display_name" : "Definition",
            "transform" : [],
            "searchable" : "true",
            "id" : "description",
            "type" : "string",
            "description" : "Term definition.",
            "indexed" : "true",
            "cardinality" : "single",
            "required" : "false"
         },
         {
            "type" : "string",
            "description" : "Term namespace.",
            "cardinality" : "single",
            "indexed" : "true",
            "required" : "false",
            "property" : [
               "getNamespace"
            ],
            "display_name" : "Ontology source",
            "transform" : [],
            "searchable" : "false",
            "id" : "source"
         },
         {
            "indexed" : "true",
            "cardinality" : "single",
            "required" : "false",
            "type" : "boolean",
            "description" : "Is the term obsolete?",
            "id" : "is_obsolete",
            "property" : [
               "getIsObsoleteBinaryString"
            ],
            "display_name" : "Obsoletion",
            "transform" : [],
            "searchable" : "false"
         },
         {
            "description" : "Term comment.",
            "type" : "string",
>>>>>>> issue-124
            "required" : "false",
            "cardinality" : "single",
            "indexed" : "true",
<<<<<<< HEAD
            "id" : "taxon"
         },
         {
            "display_name" : "Taxon",
            "type" : "string",
            "property" : [],
            "description" : "Taxonomic group",
            "searchable" : "true",
            "cardinality" : "single",
            "transform" : [],
            "required" : "false",
            "indexed" : "true",
            "id" : "taxon_label"
         },
         {
            "property" : [],
            "display_name" : "Taxon",
            "type" : "string",
            "id" : "taxon_closure",
            "indexed" : "true",
            "transform" : [],
            "searchable" : "false",
            "cardinality" : "multi",
            "required" : "false",
            "description" : "Taxonomic group and ancestral groups."
         },
         {
            "description" : "Taxonomic group and ancestral groups.",
            "required" : "false",
            "searchable" : "true",
            "cardinality" : "multi",
            "transform" : [],
            "indexed" : "true",
            "id" : "taxon_closure_label",
            "type" : "string",
            "display_name" : "Taxon",
            "property" : []
         },
         {
            "property" : [],
            "display_name" : "Involved in",
            "type" : "string",
            "id" : "isa_partof_closure",
            "indexed" : "true",
            "cardinality" : "multi",
            "searchable" : "false",
            "transform" : [],
            "required" : "false",
            "description" : "Closure of ids/accs over isa and partof."
         },
         {
            "type" : "string",
            "display_name" : "Involved in",
            "property" : [],
            "description" : "Closure of labels over isa and partof.",
            "required" : "false",
            "cardinality" : "multi",
            "searchable" : "true",
            "transform" : [],
            "indexed" : "true",
            "id" : "isa_partof_closure_label"
         },
         {
            "type" : "string",
            "display_name" : "Inferred annotation",
            "property" : [],
            "description" : "Bioentities associated with this term or its children (over regulates).",
            "required" : "false",
            "searchable" : "false",
            "cardinality" : "multi",
            "transform" : [],
            "indexed" : "true",
            "id" : "regulates_closure"
         },
         {
            "property" : [],
            "type" : "string",
            "display_name" : "Inferred annotation",
            "id" : "regulates_closure_label",
            "indexed" : "true",
            "required" : "false",
            "searchable" : "true",
            "transform" : [],
            "cardinality" : "multi",
            "description" : "Bioentities associated with this term or its children (over regulates)."
         },
         {
            "property" : [],
            "type" : "string",
            "display_name" : "Source",
            "required" : "false",
            "transform" : [],
            "cardinality" : "single",
            "searchable" : "false",
            "description" : "Database source.",
            "id" : "source",
            "indexed" : "true"
         },
         {
            "id" : "annotation_class_list",
            "indexed" : "true",
            "transform" : [],
            "cardinality" : "multi",
            "searchable" : "false",
            "required" : "false",
            "description" : "Direct annotations.",
            "property" : [],
            "display_name" : "Direct annotation",
            "type" : "string"
         },
         {
            "id" : "annotation_class_list_label",
            "indexed" : "true",
            "transform" : [],
            "cardinality" : "multi",
            "searchable" : "false",
            "required" : "false",
            "description" : "Direct annotations.",
            "property" : [],
            "display_name" : "Direct annotation",
            "type" : "string"
         },
         {
            "description" : "Gene product synonyms.",
            "required" : "false",
            "searchable" : "false",
            "transform" : [],
            "cardinality" : "multi",
            "indexed" : "true",
            "id" : "synonym",
            "type" : "string",
            "display_name" : "Synonyms",
            "property" : []
         },
         {
            "cardinality" : "single",
            "searchable" : "true",
            "transform" : [],
            "required" : "false",
            "description" : "PANTHER families that are associated with this entity.",
            "id" : "panther_family",
            "indexed" : "true",
            "property" : [],
            "display_name" : "PANTHER family",
            "type" : "string"
         },
         {
            "property" : [],
            "display_name" : "PANTHER family",
            "type" : "string",
            "id" : "panther_family_label",
            "indexed" : "true",
            "cardinality" : "single",
            "transform" : [],
            "searchable" : "true",
            "required" : "false",
            "description" : "PANTHER families that are associated with this entity."
         },
         {
            "property" : [],
            "display_name" : "This should not be displayed",
            "type" : "string",
            "searchable" : "false",
            "cardinality" : "single",
            "transform" : [],
            "required" : "false",
            "description" : "JSON blob form of the phylogenic tree.",
            "id" : "phylo_graph_json",
            "indexed" : "false"
         },
         {
            "id" : "database_xref",
            "indexed" : "true",
            "searchable" : "false",
            "cardinality" : "multi",
            "transform" : [],
            "required" : "false",
            "description" : "Database cross-reference.",
            "property" : [],
            "display_name" : "DB xref",
            "type" : "string"
         }
      ],
      "boost_weights" : "bioentity^2.0 bioentity_label^2.0 bioentity_name^1.0 bioentity_internal_id^1.0 synonym^1.0 isa_partof_closure_label^1.0 regulates_closure^1.0 regulates_closure_label^1.0 panther_family^1.0 panther_family_label^1.0 taxon_closure_label^1.0",
      "_strict" : 0,
      "schema_generating" : "true",
      "_infile" : "/home/sjcarbon/local/src/git/amigo/metadata//bio-config.yaml",
      "result_weights" : "bioentity^8.0 bioentity_name^7.0 taxon^6.0 panther_family^5.0 type^4.0 source^3.0 annotation_class_list^2.0 synonym^1.0",
      "id" : "bioentity"
   },
   "annotation" : {
      "description" : "Associations between GO terms and genes or gene products.",
      "fields" : [
         {
            "indexed" : "true",
            "id" : "id",
            "description" : "A unique (and internal) combination of bioentity and ontology class.",
            "searchable" : "false",
            "cardinality" : "single",
            "transform" : [],
            "required" : "false",
            "display_name" : "Acc",
            "type" : "string",
            "property" : []
         },
         {
            "description" : "Database source.",
            "cardinality" : "single",
            "searchable" : "false",
            "transform" : [],
            "required" : "false",
            "indexed" : "true",
            "id" : "source",
            "display_name" : "Source",
            "type" : "string",
            "property" : []
         },
         {
            "id" : "type",
            "indexed" : "true",
            "transform" : [],
            "cardinality" : "single",
            "searchable" : "false",
            "required" : "false",
            "description" : "Type class.",
            "property" : [],
            "display_name" : "Type class id",
            "type" : "string"
         },
         {
            "property" : [],
            "type" : "string",
            "display_name" : "Date",
            "id" : "date",
            "indexed" : "true",
            "required" : "false",
            "transform" : [],
            "searchable" : "false",
            "cardinality" : "single",
            "description" : "Date of assignment."
         },
         {
            "display_name" : "Assigned by",
            "type" : "string",
            "property" : [],
            "indexed" : "true",
            "id" : "assigned_by",
            "description" : "Annotations assigned by group.",
            "cardinality" : "single",
            "transform" : [],
            "searchable" : "false",
            "required" : "false"
         },
         {
            "property" : [],
            "display_name" : "Redundant for",
            "type" : "string",
            "id" : "is_redundant_for",
            "indexed" : "true",
            "transform" : [],
            "cardinality" : "single",
            "searchable" : "false",
            "required" : "false",
            "description" : "Rational for redundancy of annotation."
         },
         {
            "property" : [],
            "type" : "string",
            "display_name" : "Taxon",
            "required" : "false",
            "cardinality" : "single",
            "searchable" : "false",
            "transform" : [],
            "description" : "Taxonomic group.",
            "id" : "taxon",
            "indexed" : "true"
         },
         {
            "type" : "string",
            "display_name" : "Taxon",
            "property" : [],
            "indexed" : "true",
            "id" : "taxon_label",
            "description" : "Taxonomic group and ancestral groups.",
            "required" : "false",
            "transform" : [],
            "cardinality" : "single",
            "searchable" : "true"
         },
         {
            "property" : [],
            "display_name" : "Taxon",
            "type" : "string",
            "cardinality" : "multi",
            "searchable" : "false",
            "transform" : [],
            "required" : "false",
            "description" : "Taxonomic group and ancestral groups.",
            "id" : "taxon_closure",
            "indexed" : "true"
         },
         {
            "type" : "string",
            "display_name" : "Taxon",
            "property" : [],
            "description" : "Taxonomic group and ancestral groups.",
            "required" : "false",
            "searchable" : "true",
            "cardinality" : "multi",
            "transform" : [],
            "indexed" : "true",
            "id" : "taxon_closure_label"
         },
         {
            "property" : [],
            "display_name" : "Secondary taxon",
            "type" : "string",
            "searchable" : "false",
            "cardinality" : "single",
            "transform" : [],
            "required" : "false",
            "description" : "Secondary taxon.",
            "id" : "secondary_taxon",
            "indexed" : "true"
         },
         {
            "indexed" : "true",
            "id" : "secondary_taxon_label",
            "description" : "Secondary taxon.",
            "required" : "false",
            "searchable" : "true",
            "cardinality" : "single",
            "transform" : [],
            "type" : "string",
            "display_name" : "Secondary taxon",
            "property" : []
         },
         {
            "type" : "string",
            "display_name" : "Secondary taxon",
            "property" : [],
            "description" : "Secondary taxon closure.",
            "required" : "false",
=======
            "searchable" : "true",
            "transform" : [],
            "display_name" : "Comment",
            "property" : [
               "getComment"
            ],
            "id" : "comment"
         },
         {
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "multi",
            "type" : "string",
            "description" : "Term synonyms.",
            "id" : "synonym",
            "transform" : [],
            "searchable" : "true",
            "property" : [
               "getOBOSynonymStrings"
            ],
            "display_name" : "Synonyms"
         },
         {
            "searchable" : "false",
            "transform" : [],
            "property" : [
               "getAnnotationPropertyValues",
               "alt_id"
            ],
            "display_name" : "Alt ID",
            "id" : "alternate_id",
            "description" : "Alternate term identifier.",
            "type" : "string",
            "required" : "false",
            "cardinality" : "multi",
            "indexed" : "true"
         },
         {
            "id" : "replaced_by",
            "display_name" : "Replaced By",
            "property" : [
               "getAnnotationPropertyValues",
               "replaced_by"
            ],
            "searchable" : "false",
            "transform" : [],
            "cardinality" : "multi",
            "indexed" : "true",
            "required" : "false",
            "description" : "Term that replaces this term.",
            "type" : "string"
         },
         {
            "id" : "consider",
            "display_name" : "Consider",
            "property" : [
               "getAnnotationPropertyValues",
               "consider"
            ],
            "searchable" : "false",
            "transform" : [],
            "cardinality" : "multi",
            "indexed" : "true",
            "required" : "false",
            "description" : "Others terms you might want to look at.",
            "type" : "string"
         },
         {
            "type" : "string",
            "description" : "Special use collections of terms.",
            "indexed" : "true",
            "cardinality" : "multi",
            "required" : "false",
            "display_name" : "Subset",
            "property" : [
               "getSubsets"
            ],
            "transform" : [],
            "searchable" : "false",
            "id" : "subset"
         },
         {
            "indexed" : "true",
            "cardinality" : "multi",
            "required" : "false",
            "description" : "Definition cross-reference.",
            "type" : "string",
            "id" : "definition_xref",
            "display_name" : "Def xref",
            "property" : [
               "getDefXref"
            ],
            "searchable" : "false",
            "transform" : []
         },
         {
            "type" : "string",
            "description" : "Database cross-reference.",
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "multi",
            "transform" : [],
            "searchable" : "false",
            "display_name" : "DB xref",
            "property" : [
               "getXref"
            ],
            "id" : "database_xref"
         },
         {
            "property" : [
               "getRelationIDClosure",
               "BFO:0000050"
            ],
            "display_name" : "Is-a/part-of",
            "transform" : [],
            "searchable" : "false",
            "id" : "isa_partof_closure",
            "type" : "string",
            "description" : "Ancestral terms (is_a/part_of).",
            "indexed" : "true",
            "cardinality" : "multi",
            "required" : "false"
         },
         {
            "display_name" : "Is-a/part-of",
            "property" : [
               "getRelationLabelClosure",
               "BFO:0000050"
            ],
            "transform" : [],
            "searchable" : "true",
            "id" : "isa_partof_closure_label",
            "type" : "string",
            "description" : "Ancestral terms (is_a/part_of).",
            "indexed" : "true",
            "cardinality" : "multi",
            "required" : "false"
         },
         {
            "id" : "regulates_closure",
            "transform" : [],
            "searchable" : "false",
            "property" : [
               "getRelationIDClosure",
               "BFO:0000050",
               "BFO:0000066",
               "RO:0002211",
               "RO:0002212",
               "RO:0002213",
               "RO:0002215",
               "RO:0002216"
            ],
            "display_name" : "Ancestor",
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "multi",
            "type" : "string",
            "description" : "Ancestral terms (regulates, occurs in, capable_of)."
         },
         {
            "display_name" : "Ancestor",
            "property" : [
               "getRelationLabelClosure",
               "BFO:0000050",
               "BFO:0000066",
               "RO:0002211",
               "RO:0002212",
               "RO:0002213",
               "RO:0002215",
               "RO:0002216"
            ],
            "transform" : [],
            "searchable" : "true",
            "id" : "regulates_closure_label",
            "type" : "string",
            "description" : "Ancestral terms (regulates, occurs in, capable_of).",
            "cardinality" : "multi",
            "indexed" : "true",
            "required" : "false"
         },
         {
            "required" : "false",
            "indexed" : "false",
            "cardinality" : "single",
            "type" : "string",
            "description" : "JSON blob form of the local stepwise topology graph. Uses various relations (including regulates, occurs in, capable_of).",
            "id" : "topology_graph_json",
            "transform" : [],
            "searchable" : "false",
            "display_name" : "Topology graph (JSON)",
            "property" : [
               "getSegmentShuntGraphJSON",
               "BFO:0000050",
               "BFO:0000066",
               "RO:0002211",
               "RO:0002212",
               "RO:0002213",
               "RO:0002215",
               "RO:0002216"
            ]
         },
         {
            "required" : "false",
            "indexed" : "false",
            "cardinality" : "single",
            "type" : "string",
            "description" : "JSON blob form of the local relation transitivity graph. Uses various relations (including regulates, occurs in, capable_of).",
            "id" : "regulates_transitivity_graph_json",
            "transform" : [],
            "searchable" : "false",
            "property" : [
               "getLineageShuntGraphJSON",
               "BFO:0000050",
               "BFO:0000066",
               "RO:0002211",
               "RO:0002212",
               "RO:0002213",
               "RO:0002215",
               "RO:0002216"
            ],
            "display_name" : "Regulates transitivity graph (JSON)"
         },
         {
            "description" : "Only in taxon.",
            "type" : "string",
            "required" : "false",
            "cardinality" : "single",
            "indexed" : "true",
            "searchable" : "true",
            "transform" : [],
            "property" : [
               "getIdentifier"
            ],
            "display_name" : "Only in taxon",
            "id" : "only_in_taxon"
         },
         {
            "id" : "only_in_taxon_label",
            "property" : [
               "getLabel"
            ],
            "display_name" : "Only in taxon",
            "transform" : [],
            "searchable" : "true",
            "indexed" : "true",
            "cardinality" : "single",
            "required" : "false",
            "type" : "string",
            "description" : "Only in taxon label."
         },
         {
            "type" : "string",
            "description" : "Only in taxon closure.",
            "indexed" : "true",
            "cardinality" : "multi",
            "required" : "false",
            "display_name" : "Only in taxon (IDs)",
            "property" : [
               "getRelationLabelClosure",
               "RO:0002160"
            ],
            "transform" : [],
            "searchable" : "false",
            "id" : "only_in_taxon_closure"
         },
         {
            "display_name" : "Only in taxon",
            "property" : [
               "getRelationLabelClosure",
               "RO:0002160"
            ],
            "transform" : [],
            "searchable" : "true",
            "id" : "only_in_taxon_closure_label",
            "type" : "string",
            "description" : "Only in taxon label closure.",
            "indexed" : "true",
            "cardinality" : "multi",
            "required" : "false"
         }
      ],
      "result_weights" : "annotation_class^8.0 description^6.0 source^4.0 synonym^3.0 alternate_id^2.0",
      "schema_generating" : "true",
      "display_name" : "Ontology",
      "boost_weights" : "annotation_class^3.0 annotation_class_label^5.5 description^1.0 comment^0.5 synonym^1.0 alternate_id^1.0 regulates_closure^1.0 regulates_closure_label^1.0",
      "filter_weights" : "source^4.0 subset^3.0 regulates_closure_label^1.0 is_obsolete^0.0",
      "searchable_extension" : "_searchable",
      "id" : "ontology",
      "weight" : "40",
      "document_category" : "ontology_class",
      "description" : "Ontology classes for GO.",
      "fields_hash" : {
         "synonym" : {
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "multi",
            "type" : "string",
            "description" : "Term synonyms.",
            "id" : "synonym",
            "transform" : [],
            "searchable" : "true",
            "property" : [
               "getOBOSynonymStrings"
            ],
            "display_name" : "Synonyms"
         },
         "replaced_by" : {
            "id" : "replaced_by",
            "display_name" : "Replaced By",
            "property" : [
               "getAnnotationPropertyValues",
               "replaced_by"
            ],
            "searchable" : "false",
            "transform" : [],
            "cardinality" : "multi",
            "indexed" : "true",
            "required" : "false",
            "description" : "Term that replaces this term.",
            "type" : "string"
         },
         "isa_partof_closure" : {
            "property" : [
               "getRelationIDClosure",
               "BFO:0000050"
            ],
            "display_name" : "Is-a/part-of",
            "transform" : [],
            "searchable" : "false",
            "id" : "isa_partof_closure",
            "type" : "string",
            "description" : "Ancestral terms (is_a/part_of).",
            "indexed" : "true",
            "cardinality" : "multi",
            "required" : "false"
         },
         "alternate_id" : {
            "searchable" : "false",
            "transform" : [],
            "property" : [
               "getAnnotationPropertyValues",
               "alt_id"
            ],
            "display_name" : "Alt ID",
            "id" : "alternate_id",
            "description" : "Alternate term identifier.",
            "type" : "string",
            "required" : "false",
            "cardinality" : "multi",
            "indexed" : "true"
         },
         "topology_graph_json" : {
            "required" : "false",
            "indexed" : "false",
            "cardinality" : "single",
            "type" : "string",
            "description" : "JSON blob form of the local stepwise topology graph. Uses various relations (including regulates, occurs in, capable_of).",
            "id" : "topology_graph_json",
            "transform" : [],
            "searchable" : "false",
            "display_name" : "Topology graph (JSON)",
            "property" : [
               "getSegmentShuntGraphJSON",
               "BFO:0000050",
               "BFO:0000066",
               "RO:0002211",
               "RO:0002212",
               "RO:0002213",
               "RO:0002215",
               "RO:0002216"
            ]
         },
         "subset" : {
            "type" : "string",
            "description" : "Special use collections of terms.",
            "indexed" : "true",
            "cardinality" : "multi",
            "required" : "false",
            "display_name" : "Subset",
            "property" : [
               "getSubsets"
            ],
            "transform" : [],
            "searchable" : "false",
            "id" : "subset"
         },
         "is_obsolete" : {
            "indexed" : "true",
            "cardinality" : "single",
            "required" : "false",
            "type" : "boolean",
            "description" : "Is the term obsolete?",
            "id" : "is_obsolete",
            "property" : [
               "getIsObsoleteBinaryString"
            ],
            "display_name" : "Obsoletion",
            "transform" : [],
            "searchable" : "false"
         },
         "consider" : {
            "id" : "consider",
            "display_name" : "Consider",
            "property" : [
               "getAnnotationPropertyValues",
               "consider"
            ],
            "searchable" : "false",
            "transform" : [],
            "cardinality" : "multi",
            "indexed" : "true",
            "required" : "false",
            "description" : "Others terms you might want to look at.",
            "type" : "string"
         },
         "comment" : {
            "description" : "Term comment.",
            "type" : "string",
            "required" : "false",
            "cardinality" : "single",
            "indexed" : "true",
            "searchable" : "true",
            "transform" : [],
            "display_name" : "Comment",
            "property" : [
               "getComment"
            ],
            "id" : "comment"
         },
         "only_in_taxon_closure" : {
            "type" : "string",
            "description" : "Only in taxon closure.",
            "indexed" : "true",
            "cardinality" : "multi",
            "required" : "false",
            "display_name" : "Only in taxon (IDs)",
            "property" : [
               "getRelationLabelClosure",
               "RO:0002160"
            ],
            "transform" : [],
            "searchable" : "false",
            "id" : "only_in_taxon_closure"
         },
         "definition_xref" : {
            "indexed" : "true",
            "cardinality" : "multi",
            "required" : "false",
            "description" : "Definition cross-reference.",
            "type" : "string",
            "id" : "definition_xref",
            "display_name" : "Def xref",
            "property" : [
               "getDefXref"
            ],
            "searchable" : "false",
            "transform" : []
         },
         "only_in_taxon_label" : {
            "id" : "only_in_taxon_label",
            "property" : [
               "getLabel"
            ],
            "display_name" : "Only in taxon",
>>>>>>> issue-124
            "transform" : [],
            "searchable" : "false",
            "cardinality" : "multi",
            "indexed" : "true",
<<<<<<< HEAD
            "id" : "secondary_taxon_closure"
         },
         {
            "property" : [],
            "display_name" : "Secondary taxon",
            "type" : "string",
            "cardinality" : "multi",
            "searchable" : "true",
            "transform" : [],
            "required" : "false",
            "description" : "Secondary taxon closure.",
            "id" : "secondary_taxon_closure_label",
            "indexed" : "true"
         },
         {
            "description" : "Annotations for this term or its children (over is_a/part_of).",
            "searchable" : "false",
            "cardinality" : "multi",
            "transform" : [],
            "required" : "false",
            "indexed" : "true",
            "id" : "isa_partof_closure",
            "display_name" : "Involved in",
            "type" : "string",
            "property" : []
         },
         {
            "property" : [],
            "display_name" : "Involved in",
            "type" : "string",
            "transform" : [],
            "searchable" : "true",
            "cardinality" : "multi",
            "required" : "false",
            "description" : "Annotations for this term or its children (over is_a/part_of).",
            "id" : "isa_partof_closure_label",
            "indexed" : "true"
         },
         {
            "type" : "string",
            "display_name" : "Inferred annotation",
            "property" : [],
            "description" : "Annotations for this term or its children (over regulates).",
            "required" : "false",
            "transform" : [],
            "cardinality" : "multi",
            "searchable" : "false",
            "indexed" : "true",
            "id" : "regulates_closure"
         },
         {
            "type" : "string",
            "display_name" : "Inferred annotation",
            "property" : [],
            "description" : "Annotations for this term or its children (over regulates).",
            "required" : "false",
            "searchable" : "true",
            "transform" : [],
            "cardinality" : "multi",
            "indexed" : "true",
            "id" : "regulates_closure_label"
         },
         {
            "property" : [],
            "display_name" : "Has participant (IDs)",
            "type" : "string",
            "id" : "has_participant_closure",
            "indexed" : "true",
            "searchable" : "false",
            "transform" : [],
            "cardinality" : "multi",
            "required" : "false",
            "description" : "Closure of ids/accs over has_participant."
         },
         {
            "cardinality" : "multi",
            "searchable" : "true",
            "transform" : [],
            "required" : "false",
            "description" : "Closure of labels over has_participant.",
            "id" : "has_participant_closure_label",
            "indexed" : "true",
            "property" : [],
            "display_name" : "Has participant",
            "type" : "string"
         },
         {
            "description" : "Gene or gene product synonyms.",
            "required" : "false",
            "cardinality" : "multi",
            "transform" : [],
            "searchable" : "false",
            "indexed" : "true",
            "id" : "synonym",
            "type" : "string",
            "display_name" : "Synonym",
            "property" : []
         },
         {
=======
            "cardinality" : "single",
            "required" : "false",
            "type" : "string",
            "description" : "Only in taxon label."
         },
         "only_in_taxon_closure_label" : {
            "display_name" : "Only in taxon",
            "property" : [
               "getRelationLabelClosure",
               "RO:0002160"
            ],
            "transform" : [],
            "searchable" : "true",
            "id" : "only_in_taxon_closure_label",
            "type" : "string",
            "description" : "Only in taxon label closure.",
            "indexed" : "true",
            "cardinality" : "multi",
            "required" : "false"
         },
         "isa_partof_closure_label" : {
            "display_name" : "Is-a/part-of",
            "property" : [
               "getRelationLabelClosure",
               "BFO:0000050"
            ],
            "transform" : [],
            "searchable" : "true",
            "id" : "isa_partof_closure_label",
            "type" : "string",
            "description" : "Ancestral terms (is_a/part_of).",
            "indexed" : "true",
            "cardinality" : "multi",
            "required" : "false"
         },
         "annotation_class_label" : {
            "cardinality" : "single",
            "indexed" : "true",
            "required" : "false",
            "description" : "Identifier.",
            "type" : "string",
            "id" : "annotation_class_label",
            "display_name" : "Term",
            "property" : [
               "getLabel"
            ],
            "searchable" : "true",
            "transform" : []
         },
         "regulates_closure_label" : {
            "display_name" : "Ancestor",
            "property" : [
               "getRelationLabelClosure",
               "BFO:0000050",
               "BFO:0000066",
               "RO:0002211",
               "RO:0002212",
               "RO:0002213",
               "RO:0002215",
               "RO:0002216"
            ],
            "transform" : [],
            "searchable" : "true",
            "id" : "regulates_closure_label",
            "type" : "string",
            "description" : "Ancestral terms (regulates, occurs in, capable_of).",
            "cardinality" : "multi",
            "indexed" : "true",
            "required" : "false"
         },
         "annotation_class" : {
            "type" : "string",
            "description" : "Term identifier.",
            "cardinality" : "single",
            "indexed" : "true",
            "required" : "false",
            "display_name" : "Term",
            "property" : [
               "getIdentifier"
            ],
            "transform" : [],
            "searchable" : "false",
            "id" : "annotation_class"
         },
         "id" : {
            "indexed" : "true",
            "cardinality" : "single",
            "required" : "false",
            "type" : "string",
            "description" : "Term identifier.",
            "id" : "id",
            "display_name" : "Acc",
            "property" : [
               "getIdentifier"
            ],
            "transform" : [],
            "searchable" : "false"
         },
         "database_xref" : {
            "type" : "string",
            "description" : "Database cross-reference.",
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "multi",
            "transform" : [],
            "searchable" : "false",
            "display_name" : "DB xref",
            "property" : [
               "getXref"
            ],
            "id" : "database_xref"
         },
         "source" : {
            "type" : "string",
            "description" : "Term namespace.",
            "cardinality" : "single",
            "indexed" : "true",
            "required" : "false",
            "property" : [
               "getNamespace"
            ],
            "display_name" : "Ontology source",
            "transform" : [],
            "searchable" : "false",
            "id" : "source"
         },
         "regulates_closure" : {
            "id" : "regulates_closure",
            "transform" : [],
            "searchable" : "false",
            "property" : [
               "getRelationIDClosure",
               "BFO:0000050",
               "BFO:0000066",
               "RO:0002211",
               "RO:0002212",
               "RO:0002213",
               "RO:0002215",
               "RO:0002216"
            ],
            "display_name" : "Ancestor",
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "multi",
            "type" : "string",
            "description" : "Ancestral terms (regulates, occurs in, capable_of)."
         },
         "description" : {
            "property" : [
               "getDef"
            ],
            "display_name" : "Definition",
            "transform" : [],
            "searchable" : "true",
            "id" : "description",
            "type" : "string",
            "description" : "Term definition.",
>>>>>>> issue-124
            "indexed" : "true",
            "id" : "bioentity",
            "description" : "Gene or gene product identifiers.",
            "cardinality" : "single",
<<<<<<< HEAD
            "searchable" : "false",
            "transform" : [],
            "required" : "false",
            "display_name" : "Gene/product",
            "type" : "string",
            "property" : []
         },
         {
            "type" : "string",
            "display_name" : "Gene/product",
            "property" : [],
            "indexed" : "true",
            "id" : "bioentity_label",
            "description" : "Gene or gene product identifiers.",
            "required" : "false",
            "cardinality" : "single",
            "searchable" : "true",
            "transform" : []
         },
         {
            "property" : [],
            "display_name" : "Gene/product name",
            "type" : "string",
            "id" : "bioentity_name",
            "indexed" : "true",
            "transform" : [],
            "searchable" : "true",
            "cardinality" : "single",
            "required" : "false",
            "description" : "The full name of the gene or gene product."
         },
         {
            "description" : "The bioentity ID used at the database of origin.",
            "cardinality" : "single",
            "transform" : [],
            "searchable" : "false",
            "required" : "false",
            "indexed" : "false",
            "id" : "bioentity_internal_id",
            "display_name" : "This should not be displayed",
            "type" : "string",
            "property" : []
         },
         {
            "description" : "Annotation qualifier.",
            "transform" : [],
            "searchable" : "false",
            "cardinality" : "multi",
            "required" : "false",
            "indexed" : "true",
            "id" : "qualifier",
            "display_name" : "Qualifier",
            "type" : "string",
            "property" : []
         },
         {
            "required" : "false",
            "searchable" : "false",
            "transform" : [],
            "cardinality" : "single",
            "description" : "Direct annotations.",
            "id" : "annotation_class",
            "indexed" : "true",
            "property" : [],
            "type" : "string",
            "display_name" : "Direct annotation"
         },
         {
            "description" : "Direct annotations.",
            "cardinality" : "single",
            "searchable" : "true",
            "transform" : [],
            "required" : "false",
            "indexed" : "true",
            "id" : "annotation_class_label",
            "display_name" : "Direct annotation",
            "type" : "string",
            "property" : []
         },
         {
=======
            "required" : "false"
         },
         "regulates_transitivity_graph_json" : {
            "required" : "false",
            "indexed" : "false",
            "cardinality" : "single",
            "type" : "string",
            "description" : "JSON blob form of the local relation transitivity graph. Uses various relations (including regulates, occurs in, capable_of).",
            "id" : "regulates_transitivity_graph_json",
            "transform" : [],
            "searchable" : "false",
            "property" : [
               "getLineageShuntGraphJSON",
               "BFO:0000050",
               "BFO:0000066",
               "RO:0002211",
               "RO:0002212",
               "RO:0002213",
               "RO:0002215",
               "RO:0002216"
            ],
            "display_name" : "Regulates transitivity graph (JSON)"
         },
         "only_in_taxon" : {
            "description" : "Only in taxon.",
            "type" : "string",
            "required" : "false",
            "cardinality" : "single",
            "indexed" : "true",
            "searchable" : "true",
            "transform" : [],
            "property" : [
               "getIdentifier"
            ],
            "display_name" : "Only in taxon",
            "id" : "only_in_taxon"
         }
      },
      "_outfile" : "./metadata/ont-config.yaml",
      "_infile" : "./metadata/ont-config.yaml",
      "_strict" : 0
   },
   "bioentity" : {
      "_outfile" : "./metadata/bio-config.yaml",
      "description" : "Genes and gene products associated with GO terms.",
      "fields_hash" : {
         "taxon_label" : {
            "searchable" : "true",
            "transform" : [],
            "display_name" : "Taxon",
            "property" : [],
            "id" : "taxon_label",
            "description" : "Taxonomic group",
            "type" : "string",
            "required" : "false",
            "cardinality" : "single",
            "indexed" : "true"
         },
         "panther_family" : {
            "required" : "false",
            "cardinality" : "single",
            "indexed" : "true",
            "description" : "PANTHER families that are associated with this entity.",
            "type" : "string",
            "id" : "panther_family",
            "searchable" : "true",
            "transform" : [],
            "display_name" : "PANTHER family",
            "property" : []
         },
         "isa_partof_closure" : {
            "type" : "string",
            "description" : "Closure of ids/accs over isa and partof.",
            "required" : "false",
            "cardinality" : "multi",
            "indexed" : "true",
            "transform" : [],
            "searchable" : "false",
            "property" : [],
            "display_name" : "Involved in",
            "id" : "isa_partof_closure"
         },
         "synonym" : {
            "description" : "Gene product synonyms.",
            "type" : "string",
            "cardinality" : "multi",
            "indexed" : "true",
            "required" : "false",
            "display_name" : "Synonyms",
            "property" : [],
            "searchable" : "false",
            "transform" : [],
            "id" : "synonym"
         },
         "bioentity_name" : {
>>>>>>> issue-124
            "required" : "false",
            "transform" : [],
            "cardinality" : "single",
            "searchable" : "false",
            "description" : "Ontology aspect.",
            "id" : "aspect",
            "indexed" : "true",
<<<<<<< HEAD
            "property" : [],
            "type" : "string",
            "display_name" : "Ontology (aspect)"
         },
         {
            "required" : "false",
            "transform" : [],
            "searchable" : "false",
            "cardinality" : "single",
            "description" : "Biological isoform.",
            "id" : "bioentity_isoform",
            "indexed" : "true",
            "property" : [],
            "type" : "string",
            "display_name" : "Isoform"
         },
         {
            "indexed" : "true",
            "id" : "evidence_type",
            "description" : "Evidence type.",
            "required" : "false",
            "cardinality" : "single",
            "transform" : [],
            "searchable" : "false",
            "type" : "string",
            "display_name" : "Evidence",
            "property" : []
         },
         {
            "display_name" : "Evidence type",
            "type" : "string",
            "property" : [],
            "indexed" : "true",
            "id" : "evidence_type_closure",
            "description" : "All evidence (evidence closure) for this annotation",
            "searchable" : "false",
            "cardinality" : "multi",
            "transform" : [],
            "required" : "false"
         },
         {
            "searchable" : "false",
            "cardinality" : "multi",
            "transform" : [],
            "required" : "false",
            "description" : "Evidence with/from.",
            "id" : "evidence_with",
            "indexed" : "true",
            "property" : [],
            "display_name" : "Evidence with",
            "type" : "string"
         },
         {
            "property" : [],
            "type" : "string",
            "display_name" : "Reference",
            "required" : "false",
            "cardinality" : "multi",
            "searchable" : "false",
            "transform" : [],
            "description" : "Database reference.",
            "id" : "reference",
            "indexed" : "true"
         },
         {
            "description" : "Extension class for the annotation.",
            "required" : "false",
            "transform" : [],
            "cardinality" : "multi",
            "searchable" : "false",
            "indexed" : "true",
            "id" : "annotation_extension_class",
            "type" : "string",
            "display_name" : "Annotation extension",
            "property" : []
         },
         {
            "display_name" : "Annotation extension",
            "type" : "string",
            "property" : [],
            "description" : "Extension class for the annotation.",
            "cardinality" : "multi",
            "transform" : [],
            "searchable" : "true",
            "required" : "false",
            "indexed" : "true",
            "id" : "annotation_extension_class_label"
         },
         {
            "property" : [],
            "display_name" : "Annotation extension",
            "type" : "string",
            "id" : "annotation_extension_class_closure",
            "indexed" : "true",
            "cardinality" : "multi",
            "searchable" : "false",
            "transform" : [],
            "required" : "false",
            "description" : "Extension class for the annotation."
         },
         {
            "property" : [],
            "type" : "string",
            "display_name" : "Annotation extension",
            "id" : "annotation_extension_class_closure_label",
            "indexed" : "true",
            "required" : "false",
            "transform" : [],
            "searchable" : "true",
            "cardinality" : "multi",
            "description" : "Extension class for the annotation."
         },
         {
            "type" : "string",
            "display_name" : "Annotation extension",
            "property" : [],
            "indexed" : "true",
            "id" : "annotation_extension_json",
            "description" : "Extension class for the annotation (JSON).",
            "required" : "false",
            "cardinality" : "multi",
            "transform" : [],
            "searchable" : "false"
         },
         {
            "type" : "string",
            "display_name" : "PANTHER family",
            "property" : [],
            "indexed" : "true",
            "id" : "panther_family",
            "description" : "PANTHER families that are associated with this entity.",
            "required" : "false",
            "searchable" : "true",
            "cardinality" : "single",
            "transform" : []
         },
         {
            "display_name" : "PANTHER family",
            "type" : "string",
            "property" : [],
            "indexed" : "true",
            "id" : "panther_family_label",
            "description" : "PANTHER families that are associated with this entity.",
            "cardinality" : "single",
            "searchable" : "true",
            "transform" : [],
            "required" : "false"
         }
      ],
      "_strict" : 0,
      "boost_weights" : "annotation_class^2.0 annotation_class_label^1.0 bioentity^2.0 bioentity_label^1.0 bioentity_name^1.0 annotation_extension_class^2.0 annotation_extension_class_label^1.0 reference^1.0 panther_family^1.0 panther_family_label^1.0 bioentity_isoform^1.0 regulates_closure^1.0 regulates_closure_label^1.0",
      "schema_generating" : "true",
      "_infile" : "/home/sjcarbon/local/src/git/amigo/metadata//ann-config.yaml",
      "result_weights" : "bioentity^7.0 bioentity_name^6.0 qualifier^5.0 annotation_class^4.7 annotation_extension_json^4.5 source^4.0 taxon^3.0 evidence_type^2.5 evidence_with^2.0 panther_family^1.5 bioentity_isoform^0.5 reference^0.25",
      "id" : "annotation",
      "fields_hash" : {
         "type" : {
            "id" : "type",
            "indexed" : "true",
            "transform" : [],
            "cardinality" : "single",
            "searchable" : "false",
            "required" : "false",
            "description" : "Type class.",
            "property" : [],
            "display_name" : "Type class id",
            "type" : "string"
         },
         "annotation_class_label" : {
            "description" : "Direct annotations.",
            "cardinality" : "single",
            "searchable" : "true",
            "transform" : [],
            "required" : "false",
            "indexed" : "true",
            "id" : "annotation_class_label",
            "display_name" : "Direct annotation",
            "type" : "string",
            "property" : []
         },
         "taxon" : {
            "property" : [],
            "type" : "string",
            "display_name" : "Taxon",
            "required" : "false",
            "cardinality" : "single",
            "searchable" : "false",
            "transform" : [],
            "description" : "Taxonomic group.",
            "id" : "taxon",
            "indexed" : "true"
         },
         "aspect" : {
            "required" : "false",
            "transform" : [],
            "cardinality" : "single",
            "searchable" : "false",
            "description" : "Ontology aspect.",
            "id" : "aspect",
            "indexed" : "true",
            "property" : [],
            "type" : "string",
            "display_name" : "Ontology (aspect)"
         },
         "is_redundant_for" : {
            "property" : [],
            "display_name" : "Redundant for",
            "type" : "string",
            "id" : "is_redundant_for",
            "indexed" : "true",
            "transform" : [],
            "cardinality" : "single",
            "searchable" : "false",
            "required" : "false",
            "description" : "Rational for redundancy of annotation."
         },
         "bioentity" : {
            "indexed" : "true",
            "id" : "bioentity",
            "description" : "Gene or gene product identifiers.",
            "cardinality" : "single",
            "searchable" : "false",
            "transform" : [],
            "required" : "false",
            "display_name" : "Gene/product",
            "type" : "string",
            "property" : []
         },
         "id" : {
            "indexed" : "true",
            "id" : "id",
            "description" : "A unique (and internal) combination of bioentity and ontology class.",
            "searchable" : "false",
            "cardinality" : "single",
            "transform" : [],
            "required" : "false",
            "display_name" : "Acc",
            "type" : "string",
            "property" : []
         },
         "annotation_class" : {
            "required" : "false",
            "searchable" : "false",
            "transform" : [],
            "cardinality" : "single",
            "description" : "Direct annotations.",
            "id" : "annotation_class",
            "indexed" : "true",
            "property" : [],
            "type" : "string",
            "display_name" : "Direct annotation"
         },
         "isa_partof_closure_label" : {
            "property" : [],
            "display_name" : "Involved in",
            "type" : "string",
            "transform" : [],
            "searchable" : "true",
            "cardinality" : "multi",
            "required" : "false",
            "description" : "Annotations for this term or its children (over is_a/part_of).",
            "id" : "isa_partof_closure_label",
            "indexed" : "true"
         },
         "panther_family_label" : {
            "display_name" : "PANTHER family",
            "type" : "string",
            "property" : [],
            "indexed" : "true",
            "id" : "panther_family_label",
            "description" : "PANTHER families that are associated with this entity.",
            "cardinality" : "single",
            "searchable" : "true",
            "transform" : [],
            "required" : "false"
         },
         "taxon_closure" : {
            "property" : [],
            "display_name" : "Taxon",
            "type" : "string",
            "cardinality" : "multi",
            "searchable" : "false",
            "transform" : [],
            "required" : "false",
            "description" : "Taxonomic group and ancestral groups.",
            "id" : "taxon_closure",
            "indexed" : "true"
         },
         "secondary_taxon" : {
            "property" : [],
            "display_name" : "Secondary taxon",
            "type" : "string",
            "searchable" : "false",
            "cardinality" : "single",
            "transform" : [],
            "required" : "false",
            "description" : "Secondary taxon.",
            "id" : "secondary_taxon",
            "indexed" : "true"
         },
         "annotation_extension_class" : {
            "description" : "Extension class for the annotation.",
            "required" : "false",
            "transform" : [],
            "cardinality" : "multi",
            "searchable" : "false",
            "indexed" : "true",
            "id" : "annotation_extension_class",
            "type" : "string",
            "display_name" : "Annotation extension",
            "property" : []
         },
         "secondary_taxon_closure_label" : {
            "property" : [],
            "display_name" : "Secondary taxon",
            "type" : "string",
=======
            "type" : "string",
            "description" : "The full name of the gene product.",
            "id" : "bioentity_name",
            "transform" : [],
            "searchable" : "true",
            "display_name" : "Name",
            "property" : []
         },
         "annotation_class_list" : {
            "display_name" : "Direct annotation",
            "property" : [],
            "transform" : [],
            "searchable" : "false",
            "id" : "annotation_class_list",
            "type" : "string",
            "description" : "Direct annotations.",
            "cardinality" : "multi",
            "indexed" : "true",
            "required" : "false"
         },
         "taxon_closure" : {
            "type" : "string",
            "description" : "Taxonomic group and ancestral groups.",
            "cardinality" : "multi",
            "indexed" : "true",
            "required" : "false",
            "property" : [],
            "display_name" : "Taxon",
            "transform" : [],
            "searchable" : "false",
            "id" : "taxon_closure"
         },
         "bioentity" : {
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "single",
            "type" : "string",
            "description" : "Gene or gene product ID.",
            "id" : "bioentity",
            "transform" : [],
            "searchable" : "false",
            "display_name" : "Acc",
            "property" : []
         },
         "annotation_class_list_label" : {
            "display_name" : "Direct annotation",
            "property" : [],
            "transform" : [],
            "searchable" : "false",
            "id" : "annotation_class_list_label",
            "type" : "string",
            "description" : "Direct annotations.",
            "cardinality" : "multi",
            "indexed" : "true",
            "required" : "false"
         },
         "phylo_graph_json" : {
            "id" : "phylo_graph_json",
            "display_name" : "This should not be displayed",
            "property" : [],
            "searchable" : "false",
            "transform" : [],
            "cardinality" : "single",
            "indexed" : "false",
            "required" : "false",
            "description" : "JSON blob form of the phylogenic tree.",
            "type" : "string"
         },
         "regulates_closure" : {
            "type" : "string",
            "description" : "Bioentities associated with this term or its children (over regulates).",
            "required" : "false",
            "cardinality" : "multi",
            "indexed" : "true",
            "transform" : [],
            "searchable" : "false",
            "display_name" : "Inferred annotation",
            "property" : [],
            "id" : "regulates_closure"
         },
         "taxon" : {
            "id" : "taxon",
            "display_name" : "Taxon",
            "property" : [],
            "searchable" : "false",
            "transform" : [],
            "cardinality" : "single",
            "indexed" : "true",
            "required" : "false",
            "description" : "Taxonomic group",
            "type" : "string"
         },
         "type" : {
            "type" : "string",
            "description" : "Type class.",
            "cardinality" : "single",
            "indexed" : "true",
            "required" : "false",
            "property" : [],
            "display_name" : "Type",
            "transform" : [],
            "searchable" : "false",
            "id" : "type"
         },
         "id" : {
            "id" : "id",
            "transform" : [],
            "searchable" : "false",
            "property" : [],
            "display_name" : "Acc",
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "single",
            "type" : "string",
            "description" : "Gene of gene product ID."
         },
         "source" : {
            "id" : "source",
            "display_name" : "Source",
            "property" : [],
            "searchable" : "false",
            "transform" : [],
            "cardinality" : "single",
            "indexed" : "true",
            "required" : "false",
            "description" : "Database source.",
            "type" : "string"
         },
         "database_xref" : {
            "indexed" : "true",
            "cardinality" : "multi",
            "required" : "false",
            "description" : "Database cross-reference.",
            "type" : "string",
            "id" : "database_xref",
            "property" : [],
            "display_name" : "DB xref",
            "searchable" : "false",
            "transform" : []
         },
         "taxon_closure_label" : {
            "id" : "taxon_closure_label",
            "searchable" : "true",
            "transform" : [],
            "property" : [],
            "display_name" : "Taxon",
            "required" : "false",
            "cardinality" : "multi",
            "indexed" : "true",
            "description" : "Taxonomic group and ancestral groups.",
            "type" : "string"
         },
         "panther_family_label" : {
            "cardinality" : "single",
            "indexed" : "true",
            "required" : "false",
            "type" : "string",
            "description" : "PANTHER families that are associated with this entity.",
            "id" : "panther_family_label",
            "display_name" : "PANTHER family",
            "property" : [],
            "transform" : [],
            "searchable" : "true"
         },
         "isa_partof_closure_label" : {
            "indexed" : "true",
            "cardinality" : "multi",
            "required" : "false",
            "type" : "string",
            "description" : "Closure of labels over isa and partof.",
            "id" : "isa_partof_closure_label",
            "property" : [],
            "display_name" : "Involved in",
            "transform" : [],
            "searchable" : "true"
         },
         "bioentity_label" : {
            "searchable" : "true",
            "transform" : [],
            "property" : [],
            "display_name" : "Label",
            "id" : "bioentity_label",
            "description" : "Symbol or name.",
            "type" : "string",
            "required" : "false",
            "cardinality" : "single",
            "indexed" : "true"
         },
         "regulates_closure_label" : {
            "display_name" : "Inferred annotation",
            "property" : [],
            "searchable" : "true",
            "transform" : [],
            "id" : "regulates_closure_label",
            "description" : "Bioentities associated with this term or its children (over regulates).",
            "type" : "string",
            "cardinality" : "multi",
            "indexed" : "true",
            "required" : "false"
         },
         "bioentity_internal_id" : {
            "cardinality" : "single",
            "indexed" : "false",
            "required" : "false",
            "type" : "string",
            "description" : "The bioentity ID used at the database of origin.",
            "id" : "bioentity_internal_id",
            "display_name" : "This should not be displayed",
            "property" : [],
            "transform" : [],
            "searchable" : "false"
         }
      },
      "_strict" : 0,
      "_infile" : "./metadata/bio-config.yaml",
      "display_name" : "Genes and gene products",
      "result_weights" : "bioentity^8.0 bioentity_name^7.0 taxon^6.0 panther_family^5.0 type^4.0 source^3.0 annotation_class_list^2.0 synonym^1.0",
      "fields" : [
         {
            "id" : "id",
            "transform" : [],
            "searchable" : "false",
            "property" : [],
            "display_name" : "Acc",
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "single",
            "type" : "string",
            "description" : "Gene of gene product ID."
         },
         {
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "single",
            "type" : "string",
            "description" : "Gene or gene product ID.",
            "id" : "bioentity",
            "transform" : [],
            "searchable" : "false",
            "display_name" : "Acc",
            "property" : []
         },
         {
            "searchable" : "true",
            "transform" : [],
            "property" : [],
            "display_name" : "Label",
            "id" : "bioentity_label",
            "description" : "Symbol or name.",
            "type" : "string",
            "required" : "false",
            "cardinality" : "single",
            "indexed" : "true"
         },
         {
            "required" : "false",
            "cardinality" : "single",
            "indexed" : "true",
            "type" : "string",
            "description" : "The full name of the gene product.",
            "id" : "bioentity_name",
            "transform" : [],
            "searchable" : "true",
            "display_name" : "Name",
            "property" : []
         },
         {
            "cardinality" : "single",
            "indexed" : "false",
            "required" : "false",
            "type" : "string",
            "description" : "The bioentity ID used at the database of origin.",
            "id" : "bioentity_internal_id",
            "display_name" : "This should not be displayed",
            "property" : [],
            "transform" : [],
            "searchable" : "false"
         },
         {
            "type" : "string",
            "description" : "Type class.",
            "cardinality" : "single",
            "indexed" : "true",
            "required" : "false",
            "property" : [],
            "display_name" : "Type",
            "transform" : [],
            "searchable" : "false",
            "id" : "type"
         },
         {
            "id" : "taxon",
            "display_name" : "Taxon",
            "property" : [],
            "searchable" : "false",
            "transform" : [],
            "cardinality" : "single",
            "indexed" : "true",
            "required" : "false",
            "description" : "Taxonomic group",
            "type" : "string"
         },
         {
            "searchable" : "true",
            "transform" : [],
            "display_name" : "Taxon",
            "property" : [],
            "id" : "taxon_label",
            "description" : "Taxonomic group",
            "type" : "string",
            "required" : "false",
            "cardinality" : "single",
            "indexed" : "true"
         },
         {
            "type" : "string",
            "description" : "Taxonomic group and ancestral groups.",
            "cardinality" : "multi",
            "indexed" : "true",
            "required" : "false",
            "property" : [],
            "display_name" : "Taxon",
            "transform" : [],
            "searchable" : "false",
            "id" : "taxon_closure"
         },
         {
            "id" : "taxon_closure_label",
            "searchable" : "true",
            "transform" : [],
            "property" : [],
            "display_name" : "Taxon",
            "required" : "false",
            "cardinality" : "multi",
            "indexed" : "true",
            "description" : "Taxonomic group and ancestral groups.",
            "type" : "string"
         },
         {
            "type" : "string",
            "description" : "Closure of ids/accs over isa and partof.",
            "required" : "false",
            "cardinality" : "multi",
            "indexed" : "true",
            "transform" : [],
            "searchable" : "false",
            "property" : [],
            "display_name" : "Involved in",
            "id" : "isa_partof_closure"
         },
         {
            "indexed" : "true",
            "cardinality" : "multi",
            "required" : "false",
            "type" : "string",
            "description" : "Closure of labels over isa and partof.",
            "id" : "isa_partof_closure_label",
            "property" : [],
            "display_name" : "Involved in",
            "transform" : [],
            "searchable" : "true"
         },
         {
            "type" : "string",
            "description" : "Bioentities associated with this term or its children (over regulates).",
            "required" : "false",
            "cardinality" : "multi",
            "indexed" : "true",
            "transform" : [],
            "searchable" : "false",
            "display_name" : "Inferred annotation",
            "property" : [],
            "id" : "regulates_closure"
         },
         {
            "display_name" : "Inferred annotation",
            "property" : [],
            "searchable" : "true",
            "transform" : [],
            "id" : "regulates_closure_label",
            "description" : "Bioentities associated with this term or its children (over regulates).",
            "type" : "string",
            "cardinality" : "multi",
            "indexed" : "true",
            "required" : "false"
         },
         {
            "id" : "source",
            "display_name" : "Source",
            "property" : [],
            "searchable" : "false",
            "transform" : [],
            "cardinality" : "single",
            "indexed" : "true",
            "required" : "false",
            "description" : "Database source.",
            "type" : "string"
         },
         {
            "display_name" : "Direct annotation",
            "property" : [],
            "transform" : [],
            "searchable" : "false",
            "id" : "annotation_class_list",
            "type" : "string",
            "description" : "Direct annotations.",
            "cardinality" : "multi",
            "indexed" : "true",
            "required" : "false"
         },
         {
            "display_name" : "Direct annotation",
            "property" : [],
            "transform" : [],
            "searchable" : "false",
            "id" : "annotation_class_list_label",
            "type" : "string",
            "description" : "Direct annotations.",
            "cardinality" : "multi",
            "indexed" : "true",
            "required" : "false"
         },
         {
            "description" : "Gene product synonyms.",
            "type" : "string",
            "cardinality" : "multi",
            "indexed" : "true",
            "required" : "false",
            "display_name" : "Synonyms",
            "property" : [],
            "searchable" : "false",
            "transform" : [],
            "id" : "synonym"
         },
         {
            "required" : "false",
            "cardinality" : "single",
            "indexed" : "true",
            "description" : "PANTHER families that are associated with this entity.",
            "type" : "string",
            "id" : "panther_family",
            "searchable" : "true",
            "transform" : [],
            "display_name" : "PANTHER family",
            "property" : []
         },
         {
            "cardinality" : "single",
            "indexed" : "true",
            "required" : "false",
            "type" : "string",
            "description" : "PANTHER families that are associated with this entity.",
            "id" : "panther_family_label",
            "display_name" : "PANTHER family",
            "property" : [],
            "transform" : [],
            "searchable" : "true"
         },
         {
            "id" : "phylo_graph_json",
            "display_name" : "This should not be displayed",
            "property" : [],
            "searchable" : "false",
            "transform" : [],
            "cardinality" : "single",
            "indexed" : "false",
            "required" : "false",
            "description" : "JSON blob form of the phylogenic tree.",
            "type" : "string"
         },
         {
            "indexed" : "true",
>>>>>>> issue-124
            "cardinality" : "multi",
            "searchable" : "true",
            "transform" : [],
            "required" : "false",
<<<<<<< HEAD
            "description" : "Secondary taxon closure.",
            "id" : "secondary_taxon_closure_label",
            "indexed" : "true"
         },
         "evidence_type_closure" : {
            "display_name" : "Evidence type",
            "type" : "string",
=======
            "description" : "Database cross-reference.",
            "type" : "string",
            "id" : "database_xref",
>>>>>>> issue-124
            "property" : [],
            "display_name" : "DB xref",
            "searchable" : "false",
            "transform" : []
         }
      ],
      "schema_generating" : "true",
      "id" : "bioentity",
      "weight" : "30",
      "document_category" : "bioentity",
      "searchable_extension" : "_searchable",
      "filter_weights" : "source^7.0 type^6.0 panther_family_label^5.0 annotation_class_list_label^3.5 taxon_closure_label^4.0 regulates_closure_label^2.0",
      "boost_weights" : "bioentity^2.0 bioentity_label^2.0 bioentity_name^1.0 bioentity_internal_id^1.0 synonym^1.0 isa_partof_closure_label^1.0 regulates_closure^1.0 regulates_closure_label^1.0 panther_family^1.0 panther_family_label^1.0 taxon_closure_label^1.0"
   },
   "family" : {
      "schema_generating" : "true",
      "fields" : [
         {
            "required" : "false",
            "cardinality" : "single",
            "indexed" : "true",
<<<<<<< HEAD
            "id" : "evidence_type_closure",
            "description" : "All evidence (evidence closure) for this annotation",
            "searchable" : "false",
            "cardinality" : "multi",
            "transform" : [],
            "required" : "false"
         },
         "bioentity_internal_id" : {
            "description" : "The bioentity ID used at the database of origin.",
            "cardinality" : "single",
            "transform" : [],
            "searchable" : "false",
            "required" : "false",
            "indexed" : "false",
            "id" : "bioentity_internal_id",
            "display_name" : "This should not be displayed",
            "type" : "string",
            "property" : []
         },
         "bioentity_name" : {
            "property" : [],
            "display_name" : "Gene/product name",
            "type" : "string",
            "id" : "bioentity_name",
            "indexed" : "true",
            "transform" : [],
            "searchable" : "true",
            "cardinality" : "single",
            "required" : "false",
            "description" : "The full name of the gene or gene product."
         },
         "taxon_label" : {
            "type" : "string",
            "display_name" : "Taxon",
            "property" : [],
            "indexed" : "true",
            "id" : "taxon_label",
            "description" : "Taxonomic group and ancestral groups.",
            "required" : "false",
            "transform" : [],
            "cardinality" : "single",
            "searchable" : "true"
         },
         "regulates_closure" : {
            "type" : "string",
            "display_name" : "Inferred annotation",
            "property" : [],
            "description" : "Annotations for this term or its children (over regulates).",
            "required" : "false",
            "transform" : [],
            "cardinality" : "multi",
            "searchable" : "false",
            "indexed" : "true",
            "id" : "regulates_closure"
         },
         "source" : {
            "description" : "Database source.",
            "cardinality" : "single",
            "searchable" : "false",
            "transform" : [],
            "required" : "false",
            "indexed" : "true",
            "id" : "source",
            "display_name" : "Source",
            "type" : "string",
            "property" : []
         },
         "bioentity_label" : {
            "type" : "string",
            "display_name" : "Gene/product",
            "property" : [],
            "indexed" : "true",
            "id" : "bioentity_label",
            "description" : "Gene or gene product identifiers.",
            "required" : "false",
            "cardinality" : "single",
            "searchable" : "true",
            "transform" : []
         },
         "evidence_with" : {
            "searchable" : "false",
            "cardinality" : "multi",
            "transform" : [],
            "required" : "false",
            "description" : "Evidence with/from.",
            "id" : "evidence_with",
            "indexed" : "true",
            "property" : [],
            "display_name" : "Evidence with",
            "type" : "string"
         },
         "taxon_closure_label" : {
            "type" : "string",
            "display_name" : "Taxon",
            "property" : [],
            "description" : "Taxonomic group and ancestral groups.",
            "required" : "false",
            "searchable" : "true",
            "cardinality" : "multi",
            "transform" : [],
            "indexed" : "true",
            "id" : "taxon_closure_label"
         },
         "secondary_taxon_label" : {
            "indexed" : "true",
            "id" : "secondary_taxon_label",
            "description" : "Secondary taxon.",
            "required" : "false",
            "searchable" : "true",
            "cardinality" : "single",
            "transform" : [],
            "type" : "string",
            "display_name" : "Secondary taxon",
            "property" : []
         },
         "annotation_extension_class_closure" : {
            "property" : [],
            "display_name" : "Annotation extension",
            "type" : "string",
            "id" : "annotation_extension_class_closure",
            "indexed" : "true",
            "cardinality" : "multi",
            "searchable" : "false",
            "transform" : [],
            "required" : "false",
            "description" : "Extension class for the annotation."
         },
         "bioentity_isoform" : {
            "required" : "false",
            "transform" : [],
            "searchable" : "false",
            "cardinality" : "single",
            "description" : "Biological isoform.",
            "id" : "bioentity_isoform",
            "indexed" : "true",
            "property" : [],
            "type" : "string",
            "display_name" : "Isoform"
         },
         "assigned_by" : {
            "display_name" : "Assigned by",
            "type" : "string",
            "property" : [],
            "indexed" : "true",
            "id" : "assigned_by",
            "description" : "Annotations assigned by group.",
            "cardinality" : "single",
            "transform" : [],
            "searchable" : "false",
            "required" : "false"
         },
         "qualifier" : {
            "description" : "Annotation qualifier.",
            "transform" : [],
            "searchable" : "false",
            "cardinality" : "multi",
            "required" : "false",
            "indexed" : "true",
            "id" : "qualifier",
            "display_name" : "Qualifier",
            "type" : "string",
            "property" : []
         },
         "evidence_type" : {
            "indexed" : "true",
            "id" : "evidence_type",
            "description" : "Evidence type.",
            "required" : "false",
            "cardinality" : "single",
            "transform" : [],
            "searchable" : "false",
            "type" : "string",
            "display_name" : "Evidence",
            "property" : []
         },
         "has_participant_closure_label" : {
            "cardinality" : "multi",
            "searchable" : "true",
            "transform" : [],
            "required" : "false",
            "description" : "Closure of labels over has_participant.",
            "id" : "has_participant_closure_label",
            "indexed" : "true",
            "property" : [],
            "display_name" : "Has participant",
            "type" : "string"
         },
         "annotation_extension_json" : {
            "type" : "string",
            "display_name" : "Annotation extension",
            "property" : [],
            "indexed" : "true",
            "id" : "annotation_extension_json",
            "description" : "Extension class for the annotation (JSON).",
            "required" : "false",
            "cardinality" : "multi",
            "transform" : [],
            "searchable" : "false"
         },
         "annotation_extension_class_closure_label" : {
            "property" : [],
            "type" : "string",
            "display_name" : "Annotation extension",
            "id" : "annotation_extension_class_closure_label",
            "indexed" : "true",
            "required" : "false",
            "transform" : [],
            "searchable" : "true",
            "cardinality" : "multi",
            "description" : "Extension class for the annotation."
         },
         "reference" : {
            "property" : [],
            "type" : "string",
            "display_name" : "Reference",
            "required" : "false",
            "cardinality" : "multi",
            "searchable" : "false",
            "transform" : [],
            "description" : "Database reference.",
            "id" : "reference",
            "indexed" : "true"
         },
         "date" : {
            "property" : [],
            "type" : "string",
            "display_name" : "Date",
            "id" : "date",
            "indexed" : "true",
            "required" : "false",
            "transform" : [],
            "searchable" : "false",
            "cardinality" : "single",
            "description" : "Date of assignment."
         },
         "panther_family" : {
            "type" : "string",
            "display_name" : "PANTHER family",
            "property" : [],
            "indexed" : "true",
            "id" : "panther_family",
            "description" : "PANTHER families that are associated with this entity.",
            "required" : "false",
            "searchable" : "true",
            "cardinality" : "single",
            "transform" : []
         },
         "annotation_extension_class_label" : {
            "display_name" : "Annotation extension",
            "type" : "string",
=======
            "type" : "string",
            "description" : "Family ID.",
            "id" : "id",
            "transform" : [],
            "searchable" : "false",
            "property" : [],
            "display_name" : "Acc"
         },
         {
            "searchable" : "true",
            "transform" : [],
            "display_name" : "PANTHER family",
            "property" : [],
            "id" : "panther_family",
            "description" : "PANTHER family IDs that are associated with this entity.",
            "type" : "string",
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "single"
         },
         {
            "searchable" : "true",
            "transform" : [],
            "property" : [],
            "display_name" : "PANTHER family",
            "id" : "panther_family_label",
            "description" : "PANTHER families that are associated with this entity.",
            "type" : "string",
            "required" : "false",
            "cardinality" : "single",
            "indexed" : "true"
         },
         {
            "description" : "JSON blob form of the phylogenic tree.",
            "type" : "string",
            "indexed" : "false",
            "cardinality" : "single",
            "required" : "false",
            "property" : [],
            "display_name" : "This should not be displayed",
            "searchable" : "false",
            "transform" : [],
            "id" : "phylo_graph_json"
         },
         {
            "id" : "bioentity_list",
            "transform" : [],
            "searchable" : "false",
            "display_name" : "Gene/products",
            "property" : [],
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "multi",
            "type" : "string",
            "description" : "Gene/products annotated with this protein family."
         },
         {
            "indexed" : "true",
            "cardinality" : "multi",
            "required" : "false",
            "description" : "Gene/products annotated with this protein family.",
            "type" : "string",
            "id" : "bioentity_list_label",
            "property" : [],
            "display_name" : "Gene/products",
            "searchable" : "false",
            "transform" : []
         }
      ],
      "result_weights" : "panther_family^5.0 bioentity_list^4.0",
      "display_name" : "Protein families",
      "boost_weights" : "panther_family^2.0 panther_family_label^2.0 bioentity_list^1.0 bioentity_list_label^1.0",
      "filter_weights" : "bioentity_list_label^1.0",
      "searchable_extension" : "_searchable",
      "document_category" : "family",
      "weight" : "5",
      "id" : "family",
      "fields_hash" : {
         "bioentity_list" : {
            "id" : "bioentity_list",
            "transform" : [],
            "searchable" : "false",
            "display_name" : "Gene/products",
            "property" : [],
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "multi",
            "type" : "string",
            "description" : "Gene/products annotated with this protein family."
         },
         "panther_family" : {
            "searchable" : "true",
            "transform" : [],
            "display_name" : "PANTHER family",
            "property" : [],
            "id" : "panther_family",
            "description" : "PANTHER family IDs that are associated with this entity.",
            "type" : "string",
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "single"
         },
         "id" : {
            "required" : "false",
            "cardinality" : "single",
            "indexed" : "true",
            "type" : "string",
            "description" : "Family ID.",
            "id" : "id",
            "transform" : [],
            "searchable" : "false",
            "property" : [],
            "display_name" : "Acc"
         },
         "panther_family_label" : {
            "searchable" : "true",
            "transform" : [],
            "property" : [],
            "display_name" : "PANTHER family",
            "id" : "panther_family_label",
            "description" : "PANTHER families that are associated with this entity.",
            "type" : "string",
            "required" : "false",
            "cardinality" : "single",
            "indexed" : "true"
         },
         "bioentity_list_label" : {
            "indexed" : "true",
            "cardinality" : "multi",
            "required" : "false",
            "description" : "Gene/products annotated with this protein family.",
            "type" : "string",
            "id" : "bioentity_list_label",
            "property" : [],
            "display_name" : "Gene/products",
            "searchable" : "false",
            "transform" : []
         },
         "phylo_graph_json" : {
            "description" : "JSON blob form of the phylogenic tree.",
            "type" : "string",
            "indexed" : "false",
            "cardinality" : "single",
            "required" : "false",
            "property" : [],
            "display_name" : "This should not be displayed",
            "searchable" : "false",
            "transform" : [],
            "id" : "phylo_graph_json"
         }
      },
      "description" : "Information about protein (PANTHER) families.",
      "_outfile" : "./metadata/protein-family-config.yaml",
      "_infile" : "./metadata/protein-family-config.yaml",
      "_strict" : 0
   },
   "general" : {
      "_strict" : 0,
      "_infile" : "./metadata/general-config.yaml",
      "_outfile" : "./metadata/general-config.yaml",
      "fields_hash" : {
         "category" : {
            "indexed" : "true",
            "cardinality" : "single",
            "required" : "false",
            "type" : "string",
            "description" : "The document category that this enitity belongs to.",
            "id" : "category",
            "display_name" : "Document category",
            "property" : [],
            "transform" : [],
            "searchable" : "false"
         },
         "entity" : {
            "property" : [],
            "display_name" : "Entity",
            "transform" : [],
            "searchable" : "false",
            "id" : "entity",
            "type" : "string",
            "description" : "The ID/label for this entity.",
            "cardinality" : "single",
            "indexed" : "true",
            "required" : "false"
         },
         "general_blob" : {
            "id" : "general_blob",
            "display_name" : "Generic blob",
            "property" : [],
            "transform" : [],
            "searchable" : "true",
            "cardinality" : "single",
            "indexed" : "true",
            "required" : "false",
            "type" : "string",
            "description" : "A hidden searchable blob document to access this item. It should contain all the goodies that we want to search for, like species(?), synonyms, etc."
         },
         "id" : {
            "id" : "id",
            "display_name" : "Internal ID",
            "property" : [],
            "searchable" : "false",
            "transform" : [],
            "cardinality" : "single",
            "indexed" : "true",
            "required" : "false",
            "description" : "The mangled internal ID for this entity.",
            "type" : "string"
         },
         "entity_label" : {
            "id" : "entity_label",
            "transform" : [],
            "searchable" : "true",
            "display_name" : "Enity label",
            "property" : [],
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "single",
            "type" : "string",
            "description" : "The label for this entity."
         }
      },
      "description" : "A generic search document to get a general overview of everything.",
      "document_category" : "general",
      "weight" : "0",
      "id" : "general",
      "filter_weights" : "category^4.0",
      "searchable_extension" : "_searchable",
      "boost_weights" : "entity^3.0 entity_label^3.0 general_blob^3.0",
      "display_name" : "General",
      "schema_generating" : "true",
      "result_weights" : "entity^3.0 category^1.0",
      "fields" : [
         {
            "id" : "id",
            "display_name" : "Internal ID",
            "property" : [],
            "searchable" : "false",
            "transform" : [],
            "cardinality" : "single",
            "indexed" : "true",
            "required" : "false",
            "description" : "The mangled internal ID for this entity.",
            "type" : "string"
         },
         {
            "property" : [],
            "display_name" : "Entity",
            "transform" : [],
            "searchable" : "false",
            "id" : "entity",
            "type" : "string",
            "description" : "The ID/label for this entity.",
            "cardinality" : "single",
            "indexed" : "true",
            "required" : "false"
         },
         {
            "id" : "entity_label",
            "transform" : [],
            "searchable" : "true",
            "display_name" : "Enity label",
            "property" : [],
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "single",
            "type" : "string",
            "description" : "The label for this entity."
         },
         {
            "indexed" : "true",
            "cardinality" : "single",
            "required" : "false",
            "type" : "string",
            "description" : "The document category that this enitity belongs to.",
            "id" : "category",
            "display_name" : "Document category",
>>>>>>> issue-124
            "property" : [],
            "description" : "Extension class for the annotation.",
            "cardinality" : "multi",
            "transform" : [],
<<<<<<< HEAD
            "searchable" : "true",
            "required" : "false",
            "indexed" : "true",
            "id" : "annotation_extension_class_label"
         },
         "regulates_closure_label" : {
            "type" : "string",
            "display_name" : "Inferred annotation",
            "property" : [],
            "description" : "Annotations for this term or its children (over regulates).",
            "required" : "false",
            "searchable" : "true",
            "transform" : [],
            "cardinality" : "multi",
            "indexed" : "true",
            "id" : "regulates_closure_label"
         },
         "has_participant_closure" : {
            "property" : [],
            "display_name" : "Has participant (IDs)",
            "type" : "string",
            "id" : "has_participant_closure",
            "indexed" : "true",
            "searchable" : "false",
            "transform" : [],
            "cardinality" : "multi",
            "required" : "false",
            "description" : "Closure of ids/accs over has_participant."
         },
         "synonym" : {
            "description" : "Gene or gene product synonyms.",
            "required" : "false",
            "cardinality" : "multi",
            "transform" : [],
            "searchable" : "false",
            "indexed" : "true",
            "id" : "synonym",
            "type" : "string",
            "display_name" : "Synonym",
            "property" : []
         },
         "secondary_taxon_closure" : {
            "type" : "string",
            "display_name" : "Secondary taxon",
            "property" : [],
            "description" : "Secondary taxon closure.",
            "required" : "false",
            "transform" : [],
            "searchable" : "false",
            "cardinality" : "multi",
            "indexed" : "true",
            "id" : "secondary_taxon_closure"
         },
         "isa_partof_closure" : {
            "description" : "Annotations for this term or its children (over is_a/part_of).",
            "searchable" : "false",
            "cardinality" : "multi",
            "transform" : [],
            "required" : "false",
            "indexed" : "true",
            "id" : "isa_partof_closure",
            "display_name" : "Involved in",
            "type" : "string",
            "property" : []
         }
      },
      "_outfile" : "/home/sjcarbon/local/src/git/amigo/metadata//ann-config.yaml",
      "display_name" : "Annotations",
      "document_category" : "annotation",
      "filter_weights" : "source^7.0 assigned_by^6.5 aspect^6.25 evidence_type_closure^6.0 panther_family_label^5.5 qualifier^5.25 taxon_closure_label^5.0 annotation_class_label^4.5 regulates_closure_label^3.0 annotation_extension_class_closure_label^2.0",
      "weight" : "20",
      "searchable_extension" : "_searchable"
   },
   "general" : {
      "_strict" : 0,
      "boost_weights" : "entity^3.0 entity_label^3.0 general_blob^3.0",
      "id" : "general",
      "_infile" : "/home/sjcarbon/local/src/git/amigo/metadata//general-config.yaml",
      "result_weights" : "entity^3.0 category^1.0",
      "schema_generating" : "true",
      "fields" : [
         {
            "property" : [],
            "display_name" : "Internal ID",
            "type" : "string",
            "cardinality" : "single",
            "searchable" : "false",
            "transform" : [],
            "required" : "false",
            "description" : "The mangled internal ID for this entity.",
            "id" : "id",
            "indexed" : "true"
         },
         {
            "indexed" : "true",
            "id" : "entity",
            "description" : "The ID/label for this entity.",
            "required" : "false",
            "searchable" : "false",
            "transform" : [],
            "cardinality" : "single",
            "type" : "string",
            "display_name" : "Entity",
            "property" : []
         },
         {
            "required" : "false",
            "cardinality" : "single",
            "searchable" : "true",
            "transform" : [],
            "description" : "The label for this entity.",
            "id" : "entity_label",
=======
            "searchable" : "false"
         },
         {
            "id" : "general_blob",
            "display_name" : "Generic blob",
            "property" : [],
            "transform" : [],
            "searchable" : "true",
            "cardinality" : "single",
            "indexed" : "true",
            "required" : "false",
            "type" : "string",
            "description" : "A hidden searchable blob document to access this item. It should contain all the goodies that we want to search for, like species(?), synonyms, etc."
         }
      ]
   },
   "complex_annotation" : {
      "_infile" : "./metadata/complex-ann-config.yaml",
      "_strict" : 0,
      "description" : "An individual unit within LEGO. This is <strong>ALPHA</strong> software.",
      "fields_hash" : {
         "process_class_closure_label" : {
            "display_name" : "Process",
            "property" : [],
            "searchable" : "true",
            "transform" : [],
            "id" : "process_class_closure_label",
            "description" : "???",
            "type" : "string",
            "cardinality" : "multi",
            "indexed" : "true",
            "required" : "false"
         },
         "function_class_label" : {
            "id" : "function_class_label",
            "transform" : [],
            "searchable" : "true",
            "property" : [],
            "display_name" : "Function",
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "single",
            "type" : "string",
            "description" : "Common function name."
         },
         "taxon_label" : {
            "description" : "Taxon derived from GAF column 13 and ncbi_taxonomy.obo.",
            "type" : "string",
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "single",
            "searchable" : "true",
            "transform" : [],
            "property" : [],
            "display_name" : "Taxon",
            "id" : "taxon_label"
         },
         "enabled_by" : {
            "description" : "???",
            "type" : "string",
            "required" : "false",
            "cardinality" : "single",
>>>>>>> issue-124
            "indexed" : "true",
            "searchable" : "true",
            "transform" : [],
            "display_name" : "Enabled by",
            "property" : [],
<<<<<<< HEAD
            "type" : "string",
            "display_name" : "Enity label"
         },
         {
            "id" : "category",
            "indexed" : "true",
            "required" : "false",
            "transform" : [],
            "cardinality" : "single",
            "searchable" : "false",
            "description" : "The document category that this enitity belongs to.",
            "property" : [],
            "type" : "string",
            "display_name" : "Document category"
         },
         {
            "property" : [],
            "display_name" : "Generic blob",
            "type" : "string",
            "cardinality" : "single",
            "transform" : [],
            "searchable" : "true",
            "required" : "false",
            "description" : "A hidden searchable blob document to access this item. It should contain all the goodies that we want to search for, like species(?), synonyms, etc.",
            "id" : "general_blob",
            "indexed" : "true"
         }
      ],
      "description" : "A generic search document to get a general overview of everything.",
      "document_category" : "general",
      "display_name" : "General",
      "weight" : "0",
      "searchable_extension" : "_searchable",
      "filter_weights" : "category^4.0",
      "fields_hash" : {
         "general_blob" : {
            "property" : [],
            "display_name" : "Generic blob",
            "type" : "string",
            "cardinality" : "single",
            "transform" : [],
            "searchable" : "true",
            "required" : "false",
            "description" : "A hidden searchable blob document to access this item. It should contain all the goodies that we want to search for, like species(?), synonyms, etc.",
            "id" : "general_blob",
            "indexed" : "true"
         },
         "entity_label" : {
=======
            "id" : "enabled_by"
         },
         "function_class" : {
            "description" : "Function acc/ID.",
            "type" : "string",
            "required" : "false",
            "cardinality" : "single",
            "indexed" : "true",
            "searchable" : "false",
            "transform" : [],
            "property" : [],
            "display_name" : "Function",
            "id" : "function_class"
         },
         "process_class_label" : {
            "description" : "Common process name.",
            "type" : "string",
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "single",
            "searchable" : "true",
            "transform" : [],
            "display_name" : "Process",
            "property" : [],
            "id" : "process_class_label"
         },
         "panther_family" : {
            "id" : "panther_family",
            "searchable" : "true",
            "transform" : [],
            "property" : [],
            "display_name" : "PANTHER family",
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "single",
            "description" : "PANTHER family IDs that are associated with this entity.",
            "type" : "string"
         },
         "owl_blob_json" : {
            "id" : "owl_blob_json",
            "transform" : [],
            "searchable" : "false",
            "property" : [],
            "display_name" : "???",
>>>>>>> issue-124
            "required" : "false",
            "indexed" : "false",
            "cardinality" : "single",
<<<<<<< HEAD
            "searchable" : "true",
            "transform" : [],
            "description" : "The label for this entity.",
            "id" : "entity_label",
            "indexed" : "true",
            "property" : [],
            "type" : "string",
            "display_name" : "Enity label"
         },
         "entity" : {
            "indexed" : "true",
            "id" : "entity",
            "description" : "The ID/label for this entity.",
            "required" : "false",
            "searchable" : "false",
            "transform" : [],
            "cardinality" : "single",
            "type" : "string",
            "display_name" : "Entity",
            "property" : []
         },
         "id" : {
            "property" : [],
            "display_name" : "Internal ID",
            "type" : "string",
            "cardinality" : "single",
            "searchable" : "false",
            "transform" : [],
            "required" : "false",
            "description" : "The mangled internal ID for this entity.",
            "id" : "id",
            "indexed" : "true"
         },
         "category" : {
            "id" : "category",
            "indexed" : "true",
            "required" : "false",
            "transform" : [],
            "cardinality" : "single",
            "searchable" : "false",
            "description" : "The document category that this enitity belongs to.",
            "property" : [],
            "type" : "string",
            "display_name" : "Document category"
         }
      },
      "_outfile" : "/home/sjcarbon/local/src/git/amigo/metadata//general-config.yaml"
   },
   "bbop_ann_ev_agg" : {
      "fields" : [
         {
            "display_name" : "Acc",
            "type" : "string",
            "property" : [],
            "indexed" : "true",
            "id" : "id",
            "description" : "Gene/product ID.",
            "searchable" : "false",
            "cardinality" : "single",
            "transform" : [],
            "required" : "false"
         },
         {
            "display_name" : "Gene/product ID",
            "type" : "string",
            "property" : [],
            "indexed" : "true",
            "id" : "bioentity",
            "description" : "Column 1 + columns 2.",
            "cardinality" : "single",
            "transform" : [],
            "searchable" : "false",
            "required" : "false"
         },
         {
            "property" : [],
            "type" : "string",
            "display_name" : "Gene/product label",
            "required" : "false",
            "transform" : [],
            "cardinality" : "single",
            "searchable" : "true",
            "description" : "Column 3.",
            "id" : "bioentity_label",
            "indexed" : "true"
         },
         {
            "property" : [],
            "type" : "string",
            "display_name" : "Annotation class",
            "id" : "annotation_class",
            "indexed" : "true",
            "required" : "false",
            "searchable" : "false",
            "cardinality" : "single",
            "transform" : [],
            "description" : "Column 5."
         },
         {
            "property" : [],
            "display_name" : "Annotation class label",
=======
            "type" : "string",
            "description" : "???"
         },
         "location_list_label" : {
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "multi",
            "description" : "",
            "type" : "string",
            "id" : "location_list_label",
            "searchable" : "false",
            "transform" : [],
            "property" : [],
            "display_name" : "Location"
         },
         "taxon_closure" : {
            "cardinality" : "multi",
            "indexed" : "true",
            "required" : "false",
            "description" : "Taxon IDs derived from GAF column 13 and ncbi_taxonomy.obo.",
            "type" : "string",
            "id" : "taxon_closure",
            "property" : [],
            "display_name" : "Taxon (IDs)",
            "searchable" : "false",
            "transform" : []
         },
         "process_class" : {
            "indexed" : "true",
            "cardinality" : "single",
            "required" : "false",
            "description" : "Process acc/ID.",
            "type" : "string",
            "id" : "process_class",
            "property" : [],
            "display_name" : "Process",
            "searchable" : "false",
            "transform" : []
         },
         "process_class_closure" : {
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "multi",
            "description" : "???",
            "type" : "string",
            "id" : "process_class_closure",
            "searchable" : "false",
            "transform" : [],
            "property" : [],
            "display_name" : "Process"
         },
         "enabled_by_label" : {
            "searchable" : "true",
            "transform" : [],
            "display_name" : "Enabled by",
            "property" : [],
            "id" : "enabled_by_label",
            "description" : "???",
            "type" : "string",
            "required" : "false",
            "cardinality" : "single",
            "indexed" : "true"
         },
         "topology_graph_json" : {
            "required" : "false",
            "indexed" : "false",
            "cardinality" : "single",
            "description" : "JSON blob form of the local stepwise topology graph.",
>>>>>>> issue-124
            "type" : "string",
            "id" : "topology_graph_json",
            "searchable" : "false",
            "transform" : [],
<<<<<<< HEAD
            "cardinality" : "single",
            "searchable" : "true",
            "required" : "false",
            "description" : "Column 5 + ontology.",
            "id" : "annotation_class_label",
            "indexed" : "true"
         },
         {
            "id" : "evidence_type_closure",
            "indexed" : "true",
            "transform" : [],
=======
            "display_name" : "Topology graph (JSON)",
            "property" : []
         },
         "annotation_unit_label" : {
            "id" : "annotation_unit_label",
            "display_name" : "Annotation unit",
            "property" : [],
            "transform" : [],
            "searchable" : "true",
            "indexed" : "true",
            "cardinality" : "single",
            "required" : "false",
            "type" : "string",
            "description" : "???."
         },
         "location_list_closure_label" : {
            "indexed" : "true",
>>>>>>> issue-124
            "cardinality" : "multi",
            "searchable" : "false",
            "required" : "false",
<<<<<<< HEAD
            "description" : "All evidence for this term/gene product pair",
            "property" : [],
            "display_name" : "Evidence type",
            "type" : "string"
         },
         {
            "property" : [],
            "type" : "string",
            "display_name" : "Evidence with",
            "required" : "false",
            "cardinality" : "multi",
            "searchable" : "false",
            "transform" : [],
            "description" : "All column 8s for this term/gene product pair",
            "id" : "evidence_with",
            "indexed" : "true"
         },
         {
            "indexed" : "true",
            "id" : "taxon",
            "description" : "Column 13: taxon.",
            "cardinality" : "single",
            "searchable" : "false",
            "transform" : [],
            "required" : "false",
            "display_name" : "Taxon",
            "type" : "string",
            "property" : []
         },
         {
            "property" : [],
            "type" : "string",
            "display_name" : "Taxon",
            "id" : "taxon_label",
            "indexed" : "true",
            "required" : "false",
            "searchable" : "true",
            "cardinality" : "single",
            "transform" : [],
            "description" : "Derived from C13 + ncbi_taxonomy.obo."
         },
         {
            "property" : [],
            "display_name" : "Taxon (IDs)",
            "type" : "string",
            "cardinality" : "multi",
            "searchable" : "false",
            "transform" : [],
            "required" : "false",
            "description" : "IDs derived from C13 + ncbi_taxonomy.obo.",
            "id" : "taxon_closure",
            "indexed" : "true"
         },
         {
            "property" : [],
            "display_name" : "Taxon",
            "type" : "string",
            "id" : "taxon_closure_label",
            "indexed" : "true",
            "searchable" : "true",
            "cardinality" : "multi",
            "transform" : [],
            "required" : "false",
            "description" : "Labels derived from C13 + ncbi_taxonomy.obo."
         },
         {
            "description" : "Family IDs that are associated with this entity.",
            "searchable" : "true",
            "cardinality" : "single",
            "transform" : [],
            "required" : "false",
            "indexed" : "true",
            "id" : "panther_family",
            "display_name" : "Protein family",
            "type" : "string",
            "property" : []
         },
         {
            "description" : "Families that are associated with this entity.",
            "required" : "false",
            "searchable" : "true",
            "cardinality" : "single",
            "transform" : [],
            "indexed" : "true",
            "id" : "panther_family_label",
            "type" : "string",
            "display_name" : "Family",
            "property" : []
         }
      ],
      "description" : "A description of annotation evidence aggregate for GOlr and AmiGO.",
      "boost_weights" : "annotation_class^2.0 annotation_class_label^1.0 bioentity^2.0 bioentity_label^1.0 panther_family^1.0 panther_family_label^1.0 taxon_closure_label^1.0",
      "_strict" : 0,
      "id" : "bbop_ann_ev_agg",
      "_infile" : "/home/sjcarbon/local/src/git/amigo/metadata//ann_ev_agg-config.yaml",
      "result_weights" : "bioentity^4.0 annotation_class^3.0 taxon^2.0",
      "schema_generating" : "true",
      "fields_hash" : {
         "panther_family_label" : {
            "description" : "Families that are associated with this entity.",
            "required" : "false",
            "searchable" : "true",
            "cardinality" : "single",
            "transform" : [],
            "indexed" : "true",
            "id" : "panther_family_label",
            "type" : "string",
            "display_name" : "Family",
            "property" : []
         },
         "taxon_label" : {
            "property" : [],
            "type" : "string",
            "display_name" : "Taxon",
            "id" : "taxon_label",
            "indexed" : "true",
            "required" : "false",
            "searchable" : "true",
            "cardinality" : "single",
            "transform" : [],
            "description" : "Derived from C13 + ncbi_taxonomy.obo."
         },
         "annotation_class_label" : {
            "property" : [],
            "display_name" : "Annotation class label",
            "type" : "string",
            "transform" : [],
            "cardinality" : "single",
            "searchable" : "true",
            "required" : "false",
            "description" : "Column 5 + ontology.",
            "id" : "annotation_class_label",
            "indexed" : "true"
         },
         "taxon_closure" : {
            "property" : [],
            "display_name" : "Taxon (IDs)",
            "type" : "string",
            "cardinality" : "multi",
            "searchable" : "false",
            "transform" : [],
            "required" : "false",
            "description" : "IDs derived from C13 + ncbi_taxonomy.obo.",
            "id" : "taxon_closure",
            "indexed" : "true"
         },
         "evidence_type_closure" : {
            "id" : "evidence_type_closure",
            "indexed" : "true",
            "transform" : [],
            "cardinality" : "multi",
            "searchable" : "false",
            "required" : "false",
            "description" : "All evidence for this term/gene product pair",
            "property" : [],
            "display_name" : "Evidence type",
            "type" : "string"
         },
         "taxon" : {
            "indexed" : "true",
            "id" : "taxon",
            "description" : "Column 13: taxon.",
            "cardinality" : "single",
            "searchable" : "false",
            "transform" : [],
            "required" : "false",
            "display_name" : "Taxon",
            "type" : "string",
            "property" : []
         },
         "bioentity_label" : {
            "property" : [],
            "type" : "string",
            "display_name" : "Gene/product label",
            "required" : "false",
            "transform" : [],
            "cardinality" : "single",
            "searchable" : "true",
            "description" : "Column 3.",
            "id" : "bioentity_label",
            "indexed" : "true"
         },
         "evidence_with" : {
            "property" : [],
            "type" : "string",
            "display_name" : "Evidence with",
            "required" : "false",
            "cardinality" : "multi",
            "searchable" : "false",
            "transform" : [],
            "description" : "All column 8s for this term/gene product pair",
            "id" : "evidence_with",
            "indexed" : "true"
         },
         "bioentity" : {
            "display_name" : "Gene/product ID",
            "type" : "string",
            "property" : [],
            "indexed" : "true",
            "id" : "bioentity",
            "description" : "Column 1 + columns 2.",
            "cardinality" : "single",
            "transform" : [],
            "searchable" : "false",
            "required" : "false"
         },
         "panther_family" : {
            "description" : "Family IDs that are associated with this entity.",
            "searchable" : "true",
            "cardinality" : "single",
            "transform" : [],
            "required" : "false",
            "indexed" : "true",
            "id" : "panther_family",
            "display_name" : "Protein family",
            "type" : "string",
            "property" : []
         },
         "id" : {
            "display_name" : "Acc",
            "type" : "string",
            "property" : [],
            "indexed" : "true",
            "id" : "id",
            "description" : "Gene/product ID.",
            "searchable" : "false",
            "cardinality" : "single",
            "transform" : [],
            "required" : "false"
         },
         "taxon_closure_label" : {
            "property" : [],
            "display_name" : "Taxon",
            "type" : "string",
            "id" : "taxon_closure_label",
            "indexed" : "true",
            "searchable" : "true",
            "cardinality" : "multi",
            "transform" : [],
            "required" : "false",
            "description" : "Labels derived from C13 + ncbi_taxonomy.obo."
         },
         "annotation_class" : {
            "property" : [],
            "type" : "string",
            "display_name" : "Annotation class",
            "id" : "annotation_class",
            "indexed" : "true",
            "required" : "false",
            "searchable" : "false",
            "cardinality" : "single",
            "transform" : [],
            "description" : "Column 5."
         }
      },
      "_outfile" : "/home/sjcarbon/local/src/git/amigo/metadata//ann_ev_agg-config.yaml",
      "document_category" : "annotation_evidence_aggregate",
      "display_name" : "Advanced",
      "searchable_extension" : "_searchable",
      "weight" : "-10",
      "filter_weights" : "evidence_type_closure^4.0 evidence_with^3.0 taxon_closure_label^2.0"
   },
   "family" : {
      "_strict" : 0,
      "boost_weights" : "panther_family^2.0 panther_family_label^2.0 bioentity_list^1.0 bioentity_list_label^1.0",
      "_infile" : "/home/sjcarbon/local/src/git/amigo/metadata//protein-family-config.yaml",
      "id" : "family",
      "result_weights" : "panther_family^5.0 bioentity_list^4.0",
      "schema_generating" : "true",
      "fields" : [
         {
            "property" : [],
            "type" : "string",
            "display_name" : "Acc",
            "required" : "false",
            "cardinality" : "single",
            "searchable" : "false",
            "transform" : [],
            "description" : "Family ID.",
            "id" : "id",
            "indexed" : "true"
         },
         {
            "searchable" : "true",
            "transform" : [],
            "cardinality" : "single",
            "required" : "false",
            "description" : "PANTHER family IDs that are associated with this entity.",
            "id" : "panther_family",
            "indexed" : "true",
            "property" : [],
            "display_name" : "PANTHER family",
            "type" : "string"
         },
         {
            "description" : "PANTHER families that are associated with this entity.",
            "required" : "false",
            "searchable" : "true",
            "transform" : [],
            "cardinality" : "single",
            "indexed" : "true",
            "id" : "panther_family_label",
            "type" : "string",
            "display_name" : "PANTHER family",
            "property" : []
         },
         {
            "id" : "phylo_graph_json",
            "indexed" : "false",
            "transform" : [],
            "searchable" : "false",
            "cardinality" : "single",
            "required" : "false",
            "description" : "JSON blob form of the phylogenic tree.",
            "property" : [],
            "display_name" : "This should not be displayed",
            "type" : "string"
         },
         {
            "property" : [],
            "type" : "string",
            "display_name" : "Gene/products",
            "required" : "false",
            "transform" : [],
            "searchable" : "false",
            "cardinality" : "multi",
            "description" : "Gene/products annotated with this protein family.",
            "id" : "bioentity_list",
            "indexed" : "true"
         },
         {
            "indexed" : "true",
            "id" : "bioentity_list_label",
            "description" : "Gene/products annotated with this protein family.",
            "cardinality" : "multi",
            "searchable" : "false",
            "transform" : [],
            "required" : "false",
            "display_name" : "Gene/products",
            "type" : "string",
            "property" : []
         }
      ],
      "description" : "Information about protein (PANTHER) families.",
      "document_category" : "family",
      "display_name" : "Protein families",
      "searchable_extension" : "_searchable",
      "weight" : "5",
      "filter_weights" : "bioentity_list_label^1.0",
      "fields_hash" : {
         "phylo_graph_json" : {
            "id" : "phylo_graph_json",
            "indexed" : "false",
            "transform" : [],
            "searchable" : "false",
            "cardinality" : "single",
            "required" : "false",
            "description" : "JSON blob form of the phylogenic tree.",
            "property" : [],
            "display_name" : "This should not be displayed",
            "type" : "string"
         },
         "bioentity_list_label" : {
            "indexed" : "true",
            "id" : "bioentity_list_label",
            "description" : "Gene/products annotated with this protein family.",
            "cardinality" : "multi",
            "searchable" : "false",
            "transform" : [],
            "required" : "false",
            "display_name" : "Gene/products",
            "type" : "string",
            "property" : []
         },
         "bioentity_list" : {
            "property" : [],
            "type" : "string",
            "display_name" : "Gene/products",
            "required" : "false",
            "transform" : [],
            "searchable" : "false",
            "cardinality" : "multi",
            "description" : "Gene/products annotated with this protein family.",
            "id" : "bioentity_list",
            "indexed" : "true"
         },
         "id" : {
            "property" : [],
            "type" : "string",
            "display_name" : "Acc",
            "required" : "false",
            "cardinality" : "single",
            "searchable" : "false",
            "transform" : [],
            "description" : "Family ID.",
            "id" : "id",
            "indexed" : "true"
         },
         "panther_family" : {
            "searchable" : "true",
            "transform" : [],
            "cardinality" : "single",
            "required" : "false",
            "description" : "PANTHER family IDs that are associated with this entity.",
            "id" : "panther_family",
            "indexed" : "true",
            "property" : [],
            "display_name" : "PANTHER family",
            "type" : "string"
         },
         "panther_family_label" : {
            "description" : "PANTHER families that are associated with this entity.",
            "required" : "false",
            "searchable" : "true",
            "transform" : [],
            "cardinality" : "single",
            "indexed" : "true",
            "id" : "panther_family_label",
            "type" : "string",
            "display_name" : "PANTHER family",
            "property" : []
         }
      },
      "_outfile" : "/home/sjcarbon/local/src/git/amigo/metadata//protein-family-config.yaml"
   },
   "complex_annotation" : {
      "filter_weights" : "annotation_group_label^5.0 enabled_by_label^4.5 location_list_closure_label^4.0 process_class_closure_label^3.0 function_class_closure_label^2.0",
      "weight" : "-5",
      "searchable_extension" : "_searchable",
      "document_category" : "complex_annotation",
      "display_name" : "Complex annotations (ALPHA)",
      "_outfile" : "/home/sjcarbon/local/src/git/amigo/metadata//complex-ann-config.yaml",
      "fields_hash" : {
         "owl_blob_json" : {
            "indexed" : "false",
            "id" : "owl_blob_json",
            "description" : "???",
            "required" : "false",
            "transform" : [],
            "cardinality" : "single",
            "searchable" : "false",
            "type" : "string",
            "display_name" : "???",
            "property" : []
         },
         "process_class" : {
            "id" : "process_class",
            "indexed" : "true",
            "required" : "false",
            "transform" : [],
            "cardinality" : "single",
            "searchable" : "false",
            "description" : "Process acc/ID.",
            "property" : [],
            "type" : "string",
            "display_name" : "Process"
         },
         "location_list_label" : {
            "property" : [],
            "type" : "string",
            "display_name" : "Location",
            "id" : "location_list_label",
            "indexed" : "true",
            "required" : "false",
            "cardinality" : "multi",
            "transform" : [],
            "searchable" : "false",
            "description" : ""
         },
         "id" : {
            "property" : [],
            "display_name" : "ID",
            "type" : "string",
            "searchable" : "false",
            "cardinality" : "single",
            "transform" : [],
            "required" : "false",
            "description" : "A unique (and internal) thing.",
            "id" : "id",
            "indexed" : "true"
         },
         "taxon_closure_label" : {
            "description" : "Taxon label closure derived from GAF column 13 and ncbi_taxonomy.obo.",
            "required" : "false",
            "searchable" : "true",
            "cardinality" : "multi",
            "transform" : [],
            "indexed" : "true",
            "id" : "taxon_closure_label",
            "type" : "string",
            "display_name" : "Taxon",
            "property" : []
         },
         "annotation_group_label" : {
            "property" : [],
            "type" : "string",
            "display_name" : "Annotation group",
            "id" : "annotation_group_label",
            "indexed" : "true",
            "required" : "false",
            "cardinality" : "single",
            "transform" : [],
            "searchable" : "true",
            "description" : "???."
         },
         "annotation_unit" : {
            "property" : [],
            "display_name" : "Annotation unit",
            "type" : "string",
            "id" : "annotation_unit",
            "indexed" : "true",
            "cardinality" : "single",
            "transform" : [],
            "searchable" : "false",
            "required" : "false",
            "description" : "???."
         },
         "function_class_closure" : {
            "property" : [],
            "display_name" : "Function",
            "type" : "string",
            "id" : "function_class_closure",
            "indexed" : "true",
            "transform" : [],
            "cardinality" : "multi",
            "searchable" : "false",
            "required" : "false",
            "description" : "???"
         },
         "location_list" : {
            "indexed" : "true",
            "id" : "location_list",
            "description" : "",
            "cardinality" : "multi",
            "transform" : [],
            "searchable" : "false",
            "required" : "false",
            "display_name" : "Location",
            "type" : "string",
            "property" : []
         },
         "taxon_label" : {
            "property" : [],
            "display_name" : "Taxon",
            "type" : "string",
            "searchable" : "true",
            "cardinality" : "single",
            "transform" : [],
            "required" : "false",
            "description" : "Taxon derived from GAF column 13 and ncbi_taxonomy.obo.",
            "id" : "taxon_label",
            "indexed" : "true"
         },
         "location_list_closure" : {
            "cardinality" : "multi",
            "searchable" : "false",
            "transform" : [],
            "required" : "false",
            "description" : "",
            "id" : "location_list_closure",
            "indexed" : "true",
            "property" : [],
            "display_name" : "Location",
            "type" : "string"
         },
         "annotation_unit_label" : {
            "property" : [],
            "type" : "string",
            "display_name" : "Annotation unit",
            "id" : "annotation_unit_label",
            "indexed" : "true",
            "required" : "false",
            "searchable" : "true",
            "cardinality" : "single",
            "transform" : [],
            "description" : "???."
         },
         "enabled_by_label" : {
            "property" : [],
            "display_name" : "Enabled by",
            "type" : "string",
            "cardinality" : "single",
            "transform" : [],
            "searchable" : "true",
            "required" : "false",
            "description" : "???",
            "id" : "enabled_by_label",
            "indexed" : "true"
         },
         "taxon" : {
            "property" : [],
            "type" : "string",
            "display_name" : "Taxon",
            "id" : "taxon",
            "indexed" : "true",
            "required" : "false",
            "cardinality" : "single",
            "transform" : [],
            "searchable" : "false",
            "description" : "GAF column 13 (taxon)."
         },
         "annotation_group" : {
            "description" : "???.",
            "cardinality" : "single",
            "transform" : [],
            "searchable" : "false",
            "required" : "false",
            "indexed" : "true",
            "id" : "annotation_group",
            "display_name" : "Annotation group",
            "type" : "string",
            "property" : []
         },
         "function_class_closure_label" : {
            "id" : "function_class_closure_label",
            "indexed" : "true",
            "required" : "false",
            "cardinality" : "multi",
            "searchable" : "true",
            "transform" : [],
            "description" : "???",
            "property" : [],
            "type" : "string",
            "display_name" : "Function"
         },
         "function_class" : {
            "property" : [],
            "type" : "string",
            "display_name" : "Function",
            "required" : "false",
            "transform" : [],
            "searchable" : "false",
            "cardinality" : "single",
            "description" : "Function acc/ID.",
            "id" : "function_class",
            "indexed" : "true"
         },
         "panther_family" : {
            "property" : [],
            "type" : "string",
            "display_name" : "PANTHER family",
            "id" : "panther_family",
            "indexed" : "true",
            "required" : "false",
            "searchable" : "true",
            "cardinality" : "single",
            "transform" : [],
            "description" : "PANTHER family IDs that are associated with this entity."
         },
         "process_class_closure" : {
            "property" : [],
            "display_name" : "Process",
            "type" : "string",
            "transform" : [],
            "searchable" : "false",
            "cardinality" : "multi",
            "required" : "false",
            "description" : "???",
            "id" : "process_class_closure",
            "indexed" : "true"
         },
         "enabled_by" : {
            "description" : "???",
            "cardinality" : "single",
            "transform" : [],
            "searchable" : "true",
            "required" : "false",
            "indexed" : "true",
            "id" : "enabled_by",
            "display_name" : "Enabled by",
            "type" : "string",
            "property" : []
         },
         "topology_graph_json" : {
            "id" : "topology_graph_json",
            "indexed" : "false",
            "searchable" : "false",
            "cardinality" : "single",
            "transform" : [],
            "required" : "false",
            "description" : "JSON blob form of the local stepwise topology graph.",
            "property" : [],
            "display_name" : "Topology graph (JSON)",
            "type" : "string"
         },
         "process_class_label" : {
            "type" : "string",
            "display_name" : "Process",
            "property" : [],
            "indexed" : "true",
            "id" : "process_class_label",
            "description" : "Common process name.",
            "required" : "false",
            "cardinality" : "single",
            "transform" : [],
            "searchable" : "true"
         },
         "panther_family_label" : {
            "property" : [],
            "type" : "string",
            "display_name" : "PANTHER family",
            "required" : "false",
            "searchable" : "true",
            "cardinality" : "single",
            "transform" : [],
            "description" : "PANTHER families that are associated with this entity.",
            "id" : "panther_family_label",
            "indexed" : "true"
         },
         "function_class_label" : {
            "id" : "function_class_label",
            "indexed" : "true",
            "required" : "false",
            "cardinality" : "single",
            "searchable" : "true",
            "transform" : [],
            "description" : "Common function name.",
            "property" : [],
            "type" : "string",
            "display_name" : "Function"
         },
         "taxon_closure" : {
            "id" : "taxon_closure",
            "indexed" : "true",
            "transform" : [],
            "searchable" : "false",
            "cardinality" : "multi",
            "required" : "false",
            "description" : "Taxon IDs derived from GAF column 13 and ncbi_taxonomy.obo.",
            "property" : [],
            "display_name" : "Taxon (IDs)",
            "type" : "string"
         },
         "process_class_closure_label" : {
            "required" : "false",
            "cardinality" : "multi",
            "transform" : [],
            "searchable" : "true",
            "description" : "???",
            "id" : "process_class_closure_label",
            "indexed" : "true",
            "property" : [],
            "type" : "string",
            "display_name" : "Process"
         },
         "location_list_closure_label" : {
            "indexed" : "true",
            "id" : "location_list_closure_label",
            "description" : "",
            "cardinality" : "multi",
            "searchable" : "false",
            "transform" : [],
            "required" : "false",
            "display_name" : "Location",
            "type" : "string",
            "property" : []
         }
      },
      "schema_generating" : "true",
      "_infile" : "/home/sjcarbon/local/src/git/amigo/metadata//complex-ann-config.yaml",
      "id" : "complex_annotation",
      "result_weights" : "function_class^5.0 enabled_by^4.0 location_list^3.0 process_class^2.0 annotation_group^1.0",
      "boost_weights" : "annotation_group_label^1.0 annotation_unit_label^1.0 enabled_by^1.0 enabled_by_label^1.0 location_list_closure^1.0 location_list_closure_label^1.0 process_class_closure_label^1.0 function_class_closure_label^1.0",
      "_strict" : 0,
      "description" : "An individual unit within LEGO. This is <strong>ALPHA</strong> software.",
      "fields" : [
         {
            "property" : [],
            "display_name" : "ID",
            "type" : "string",
            "searchable" : "false",
            "cardinality" : "single",
            "transform" : [],
            "required" : "false",
            "description" : "A unique (and internal) thing.",
            "id" : "id",
            "indexed" : "true"
         },
         {
            "property" : [],
            "display_name" : "Annotation unit",
            "type" : "string",
            "id" : "annotation_unit",
            "indexed" : "true",
            "cardinality" : "single",
            "transform" : [],
            "searchable" : "false",
            "required" : "false",
            "description" : "???."
         },
         {
            "property" : [],
            "type" : "string",
            "display_name" : "Annotation unit",
            "id" : "annotation_unit_label",
            "indexed" : "true",
            "required" : "false",
            "searchable" : "true",
            "cardinality" : "single",
            "transform" : [],
            "description" : "???."
         },
         {
            "description" : "???.",
            "cardinality" : "single",
            "transform" : [],
            "searchable" : "false",
            "required" : "false",
            "indexed" : "true",
            "id" : "annotation_group",
            "display_name" : "Annotation group",
            "type" : "string",
            "property" : []
         },
         {
            "property" : [],
            "type" : "string",
            "display_name" : "Annotation group",
            "id" : "annotation_group_label",
            "indexed" : "true",
            "required" : "false",
            "cardinality" : "single",
            "transform" : [],
            "searchable" : "true",
            "description" : "???."
         },
         {
            "description" : "???",
            "cardinality" : "single",
            "transform" : [],
            "searchable" : "true",
            "required" : "false",
            "indexed" : "true",
            "id" : "enabled_by",
            "display_name" : "Enabled by",
            "type" : "string",
            "property" : []
         },
         {
            "property" : [],
            "display_name" : "Enabled by",
            "type" : "string",
            "cardinality" : "single",
            "transform" : [],
            "searchable" : "true",
            "required" : "false",
            "description" : "???",
            "id" : "enabled_by_label",
            "indexed" : "true"
         },
         {
            "property" : [],
            "type" : "string",
            "display_name" : "PANTHER family",
            "id" : "panther_family",
            "indexed" : "true",
            "required" : "false",
            "searchable" : "true",
            "cardinality" : "single",
            "transform" : [],
            "description" : "PANTHER family IDs that are associated with this entity."
         },
         {
            "property" : [],
            "type" : "string",
            "display_name" : "PANTHER family",
            "required" : "false",
            "searchable" : "true",
            "cardinality" : "single",
            "transform" : [],
            "description" : "PANTHER families that are associated with this entity.",
            "id" : "panther_family_label",
            "indexed" : "true"
         },
         {
            "property" : [],
            "type" : "string",
            "display_name" : "Taxon",
            "id" : "taxon",
            "indexed" : "true",
            "required" : "false",
            "cardinality" : "single",
            "transform" : [],
            "searchable" : "false",
            "description" : "GAF column 13 (taxon)."
         },
         {
            "property" : [],
            "display_name" : "Taxon",
            "type" : "string",
            "searchable" : "true",
            "cardinality" : "single",
            "transform" : [],
            "required" : "false",
            "description" : "Taxon derived from GAF column 13 and ncbi_taxonomy.obo.",
            "id" : "taxon_label",
            "indexed" : "true"
         },
         {
            "id" : "taxon_closure",
            "indexed" : "true",
            "transform" : [],
            "searchable" : "false",
            "cardinality" : "multi",
            "required" : "false",
            "description" : "Taxon IDs derived from GAF column 13 and ncbi_taxonomy.obo.",
            "property" : [],
            "display_name" : "Taxon (IDs)",
            "type" : "string"
         },
         {
            "description" : "Taxon label closure derived from GAF column 13 and ncbi_taxonomy.obo.",
            "required" : "false",
            "searchable" : "true",
            "cardinality" : "multi",
            "transform" : [],
            "indexed" : "true",
            "id" : "taxon_closure_label",
            "type" : "string",
            "display_name" : "Taxon",
            "property" : []
         },
         {
            "property" : [],
            "type" : "string",
            "display_name" : "Function",
            "required" : "false",
            "transform" : [],
            "searchable" : "false",
            "cardinality" : "single",
            "description" : "Function acc/ID.",
            "id" : "function_class",
            "indexed" : "true"
         },
         {
            "id" : "function_class_label",
            "indexed" : "true",
            "required" : "false",
            "cardinality" : "single",
            "searchable" : "true",
            "transform" : [],
            "description" : "Common function name.",
            "property" : [],
            "type" : "string",
            "display_name" : "Function"
         },
         {
            "property" : [],
            "display_name" : "Function",
            "type" : "string",
            "id" : "function_class_closure",
            "indexed" : "true",
            "transform" : [],
            "cardinality" : "multi",
            "searchable" : "false",
            "required" : "false",
            "description" : "???"
         },
         {
            "id" : "function_class_closure_label",
            "indexed" : "true",
            "required" : "false",
            "cardinality" : "multi",
            "searchable" : "true",
            "transform" : [],
            "description" : "???",
            "property" : [],
            "type" : "string",
            "display_name" : "Function"
=======
            "description" : "",
            "type" : "string",
            "id" : "location_list_closure_label",
            "display_name" : "Location",
            "property" : [],
            "searchable" : "false",
            "transform" : []
         },
         "taxon" : {
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "single",
            "type" : "string",
            "description" : "GAF column 13 (taxon).",
            "id" : "taxon",
            "transform" : [],
            "searchable" : "false",
            "property" : [],
            "display_name" : "Taxon"
         },
         "location_list" : {
            "display_name" : "Location",
            "property" : [],
            "searchable" : "false",
            "transform" : [],
            "id" : "location_list",
            "description" : "",
            "type" : "string",
            "cardinality" : "multi",
            "indexed" : "true",
            "required" : "false"
         },
         "function_class_closure_label" : {
            "type" : "string",
            "description" : "???",
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "multi",
            "transform" : [],
            "searchable" : "true",
            "display_name" : "Function",
            "property" : [],
            "id" : "function_class_closure_label"
         },
         "annotation_group" : {
            "required" : "false",
            "cardinality" : "single",
            "indexed" : "true",
            "description" : "???.",
            "type" : "string",
            "id" : "annotation_group",
            "searchable" : "false",
            "transform" : [],
            "display_name" : "Annotation group",
            "property" : []
         },
         "location_list_closure" : {
            "id" : "location_list_closure",
            "display_name" : "Location",
            "property" : [],
            "searchable" : "false",
            "transform" : [],
            "indexed" : "true",
            "cardinality" : "multi",
            "required" : "false",
            "description" : "",
            "type" : "string"
         },
         "panther_family_label" : {
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "single",
            "description" : "PANTHER families that are associated with this entity.",
            "type" : "string",
            "id" : "panther_family_label",
            "searchable" : "true",
            "transform" : [],
            "property" : [],
            "display_name" : "PANTHER family"
         },
         "annotation_unit" : {
            "description" : "???.",
            "type" : "string",
            "cardinality" : "single",
            "indexed" : "true",
            "required" : "false",
            "property" : [],
            "display_name" : "Annotation unit",
            "searchable" : "false",
            "transform" : [],
            "id" : "annotation_unit"
         },
         "function_class_closure" : {
            "id" : "function_class_closure",
            "property" : [],
            "display_name" : "Function",
            "searchable" : "false",
            "transform" : [],
            "indexed" : "true",
            "cardinality" : "multi",
            "required" : "false",
            "description" : "???",
            "type" : "string"
         },
         "id" : {
            "searchable" : "false",
            "transform" : [],
            "display_name" : "ID",
            "property" : [],
            "id" : "id",
            "description" : "A unique (and internal) thing.",
            "type" : "string",
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "single"
         },
         "taxon_closure_label" : {
            "searchable" : "true",
            "transform" : [],
            "display_name" : "Taxon",
            "property" : [],
            "id" : "taxon_closure_label",
            "description" : "Taxon label closure derived from GAF column 13 and ncbi_taxonomy.obo.",
            "type" : "string",
            "required" : "false",
            "cardinality" : "multi",
            "indexed" : "true"
         },
         "annotation_group_label" : {
            "property" : [],
            "display_name" : "Annotation group",
            "searchable" : "true",
            "transform" : [],
            "id" : "annotation_group_label",
            "description" : "???.",
            "type" : "string",
            "indexed" : "true",
            "cardinality" : "single",
            "required" : "false"
         }
      },
      "_outfile" : "./metadata/complex-ann-config.yaml",
      "filter_weights" : "annotation_group_label^5.0 enabled_by_label^4.5 location_list_closure_label^4.0 process_class_closure_label^3.0 function_class_closure_label^2.0",
      "boost_weights" : "annotation_group_label^1.0 annotation_unit_label^1.0 enabled_by^1.0 enabled_by_label^1.0 location_list_closure^1.0 location_list_closure_label^1.0 process_class_closure_label^1.0 function_class_closure_label^1.0",
      "searchable_extension" : "_searchable",
      "id" : "complex_annotation",
      "document_category" : "complex_annotation",
      "weight" : "-5",
      "result_weights" : "function_class^5.0 enabled_by^4.0 location_list^3.0 process_class^2.0 annotation_group^1.0",
      "fields" : [
         {
            "searchable" : "false",
            "transform" : [],
            "display_name" : "ID",
            "property" : [],
            "id" : "id",
            "description" : "A unique (and internal) thing.",
            "type" : "string",
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "single"
         },
         {
            "description" : "???.",
            "type" : "string",
            "cardinality" : "single",
            "indexed" : "true",
            "required" : "false",
            "property" : [],
            "display_name" : "Annotation unit",
            "searchable" : "false",
            "transform" : [],
            "id" : "annotation_unit"
         },
         {
            "id" : "annotation_unit_label",
            "display_name" : "Annotation unit",
            "property" : [],
            "transform" : [],
            "searchable" : "true",
            "indexed" : "true",
            "cardinality" : "single",
            "required" : "false",
            "type" : "string",
            "description" : "???."
         },
         {
            "required" : "false",
            "cardinality" : "single",
            "indexed" : "true",
            "description" : "???.",
            "type" : "string",
            "id" : "annotation_group",
            "searchable" : "false",
            "transform" : [],
            "display_name" : "Annotation group",
            "property" : []
         },
         {
            "property" : [],
            "display_name" : "Annotation group",
            "searchable" : "true",
            "transform" : [],
            "id" : "annotation_group_label",
            "description" : "???.",
            "type" : "string",
            "indexed" : "true",
            "cardinality" : "single",
            "required" : "false"
         },
         {
            "description" : "???",
            "type" : "string",
            "required" : "false",
            "cardinality" : "single",
            "indexed" : "true",
            "searchable" : "true",
            "transform" : [],
            "display_name" : "Enabled by",
            "property" : [],
            "id" : "enabled_by"
         },
         {
            "searchable" : "true",
            "transform" : [],
            "display_name" : "Enabled by",
            "property" : [],
            "id" : "enabled_by_label",
            "description" : "???",
            "type" : "string",
            "required" : "false",
            "cardinality" : "single",
            "indexed" : "true"
         },
         {
            "id" : "panther_family",
            "searchable" : "true",
            "transform" : [],
            "property" : [],
            "display_name" : "PANTHER family",
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "single",
            "description" : "PANTHER family IDs that are associated with this entity.",
            "type" : "string"
         },
         {
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "single",
            "description" : "PANTHER families that are associated with this entity.",
            "type" : "string",
            "id" : "panther_family_label",
            "searchable" : "true",
            "transform" : [],
            "property" : [],
            "display_name" : "PANTHER family"
         },
         {
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "single",
            "type" : "string",
            "description" : "GAF column 13 (taxon).",
            "id" : "taxon",
            "transform" : [],
            "searchable" : "false",
            "property" : [],
            "display_name" : "Taxon"
         },
         {
            "description" : "Taxon derived from GAF column 13 and ncbi_taxonomy.obo.",
            "type" : "string",
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "single",
            "searchable" : "true",
            "transform" : [],
            "property" : [],
            "display_name" : "Taxon",
            "id" : "taxon_label"
         },
         {
            "cardinality" : "multi",
            "indexed" : "true",
            "required" : "false",
            "description" : "Taxon IDs derived from GAF column 13 and ncbi_taxonomy.obo.",
            "type" : "string",
            "id" : "taxon_closure",
            "property" : [],
            "display_name" : "Taxon (IDs)",
            "searchable" : "false",
            "transform" : []
         },
         {
            "searchable" : "true",
            "transform" : [],
            "display_name" : "Taxon",
            "property" : [],
            "id" : "taxon_closure_label",
            "description" : "Taxon label closure derived from GAF column 13 and ncbi_taxonomy.obo.",
            "type" : "string",
            "required" : "false",
            "cardinality" : "multi",
            "indexed" : "true"
         },
         {
            "description" : "Function acc/ID.",
            "type" : "string",
            "required" : "false",
            "cardinality" : "single",
            "indexed" : "true",
            "searchable" : "false",
            "transform" : [],
            "property" : [],
            "display_name" : "Function",
            "id" : "function_class"
         },
         {
            "id" : "function_class_label",
            "transform" : [],
            "searchable" : "true",
            "property" : [],
            "display_name" : "Function",
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "single",
            "type" : "string",
            "description" : "Common function name."
         },
         {
            "id" : "function_class_closure",
            "property" : [],
            "display_name" : "Function",
            "searchable" : "false",
            "transform" : [],
            "indexed" : "true",
            "cardinality" : "multi",
            "required" : "false",
            "description" : "???",
            "type" : "string"
         },
         {
            "type" : "string",
            "description" : "???",
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "multi",
            "transform" : [],
            "searchable" : "true",
            "display_name" : "Function",
            "property" : [],
            "id" : "function_class_closure_label"
         },
         {
            "indexed" : "true",
            "cardinality" : "single",
            "required" : "false",
            "description" : "Process acc/ID.",
            "type" : "string",
            "id" : "process_class",
            "property" : [],
            "display_name" : "Process",
            "searchable" : "false",
            "transform" : []
         },
         {
            "description" : "Common process name.",
            "type" : "string",
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "single",
            "searchable" : "true",
            "transform" : [],
            "display_name" : "Process",
            "property" : [],
            "id" : "process_class_label"
         },
         {
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "multi",
            "description" : "???",
            "type" : "string",
            "id" : "process_class_closure",
            "searchable" : "false",
            "transform" : [],
            "property" : [],
            "display_name" : "Process"
         },
         {
            "display_name" : "Process",
            "property" : [],
            "searchable" : "true",
            "transform" : [],
            "id" : "process_class_closure_label",
            "description" : "???",
            "type" : "string",
            "cardinality" : "multi",
            "indexed" : "true",
            "required" : "false"
         },
         {
            "display_name" : "Location",
            "property" : [],
            "searchable" : "false",
            "transform" : [],
            "id" : "location_list",
            "description" : "",
            "type" : "string",
            "cardinality" : "multi",
            "indexed" : "true",
            "required" : "false"
         },
         {
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "multi",
            "description" : "",
            "type" : "string",
            "id" : "location_list_label",
            "searchable" : "false",
            "transform" : [],
            "property" : [],
            "display_name" : "Location"
         },
         {
            "id" : "location_list_closure",
            "display_name" : "Location",
            "property" : [],
            "searchable" : "false",
            "transform" : [],
            "indexed" : "true",
            "cardinality" : "multi",
            "required" : "false",
            "description" : "",
            "type" : "string"
         },
         {
            "indexed" : "true",
            "cardinality" : "multi",
            "required" : "false",
            "description" : "",
            "type" : "string",
            "id" : "location_list_closure_label",
            "display_name" : "Location",
            "property" : [],
            "searchable" : "false",
            "transform" : []
         },
         {
            "id" : "owl_blob_json",
            "transform" : [],
            "searchable" : "false",
            "property" : [],
            "display_name" : "???",
            "required" : "false",
            "indexed" : "false",
            "cardinality" : "single",
            "type" : "string",
            "description" : "???"
         },
         {
            "required" : "false",
            "indexed" : "false",
            "cardinality" : "single",
            "description" : "JSON blob form of the local stepwise topology graph.",
            "type" : "string",
            "id" : "topology_graph_json",
            "searchable" : "false",
            "transform" : [],
            "display_name" : "Topology graph (JSON)",
            "property" : []
         }
      ],
      "schema_generating" : "true",
      "display_name" : "Complex annotations (ALPHA)"
   },
   "bbop_term_ac" : {
      "_strict" : 0,
      "_infile" : "./metadata/term-autocomplete-config.yaml",
      "_outfile" : "./metadata/term-autocomplete-config.yaml",
      "fields_hash" : {
         "id" : {
            "searchable" : "false",
            "transform" : [],
            "property" : [],
            "display_name" : "Acc",
            "id" : "id",
            "description" : "Term acc/ID.",
            "type" : "string",
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "single"
         },
         "annotation_class" : {
            "display_name" : "Term",
            "property" : [],
            "searchable" : "false",
            "transform" : [],
            "id" : "annotation_class",
            "description" : "Term acc/ID.",
            "type" : "string",
            "indexed" : "true",
            "cardinality" : "single",
            "required" : "false"
         },
         "alternate_id" : {
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "multi",
            "type" : "string",
            "description" : "Alternate term id.",
            "id" : "alternate_id",
            "transform" : [],
            "searchable" : "false",
            "display_name" : "Alt ID",
            "property" : []
         },
         "annotation_class_label" : {
            "required" : "false",
            "cardinality" : "single",
            "indexed" : "true",
            "type" : "string",
            "description" : "Common term name.",
            "id" : "annotation_class_label",
            "transform" : [],
            "searchable" : "true",
            "property" : [],
            "display_name" : "Term"
         },
         "synonym" : {
            "searchable" : "true",
            "transform" : [],
            "display_name" : "Synonyms",
            "property" : [],
            "id" : "synonym",
            "description" : "Term synonyms.",
            "type" : "string",
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "multi"
         }
      },
      "description" : "Easily find ontology classes in GO. For personality only - not a schema configuration.",
      "weight" : "-20",
      "document_category" : "ontology_class",
      "id" : "bbop_term_ac",
      "searchable_extension" : "_searchable",
      "boost_weights" : "annotation_class^5.0 annotation_class_label^5.0 synonym^1.0 alternate_id^1.0",
      "filter_weights" : "annotation_class^8.0 synonym^3.0 alternate_id^2.0",
      "display_name" : "Term autocomplete",
      "schema_generating" : "false",
      "result_weights" : "annotation_class^8.0 synonym^3.0 alternate_id^2.0",
      "fields" : [
         {
            "searchable" : "false",
            "transform" : [],
            "property" : [],
            "display_name" : "Acc",
            "id" : "id",
            "description" : "Term acc/ID.",
            "type" : "string",
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "single"
         },
         {
            "display_name" : "Term",
            "property" : [],
            "searchable" : "false",
            "transform" : [],
            "id" : "annotation_class",
            "description" : "Term acc/ID.",
            "type" : "string",
            "indexed" : "true",
            "cardinality" : "single",
            "required" : "false"
         },
         {
            "required" : "false",
            "cardinality" : "single",
            "indexed" : "true",
            "type" : "string",
            "description" : "Common term name.",
            "id" : "annotation_class_label",
            "transform" : [],
            "searchable" : "true",
            "property" : [],
            "display_name" : "Term"
         },
         {
            "searchable" : "true",
            "transform" : [],
            "display_name" : "Synonyms",
            "property" : [],
            "id" : "synonym",
            "description" : "Term synonyms.",
            "type" : "string",
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "multi"
         },
         {
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "multi",
            "type" : "string",
            "description" : "Alternate term id.",
            "id" : "alternate_id",
            "transform" : [],
            "searchable" : "false",
            "display_name" : "Alt ID",
            "property" : []
         }
      ]
   },
   "bbop_ann_ev_agg" : {
      "searchable_extension" : "_searchable",
      "boost_weights" : "annotation_class^2.0 annotation_class_label^1.0 bioentity^2.0 bioentity_label^1.0 panther_family^1.0 panther_family_label^1.0 taxon_closure_label^1.0",
      "filter_weights" : "evidence_type_closure^4.0 evidence_with^3.0 taxon_closure_label^2.0",
      "id" : "bbop_ann_ev_agg",
      "document_category" : "annotation_evidence_aggregate",
      "weight" : "-10",
      "fields" : [
         {
            "property" : [],
            "display_name" : "Acc",
            "transform" : [],
            "searchable" : "false",
            "id" : "id",
            "type" : "string",
            "description" : "Gene/product ID.",
            "indexed" : "true",
            "cardinality" : "single",
            "required" : "false"
         },
         {
            "type" : "string",
            "description" : "Column 1 + columns 2.",
            "indexed" : "true",
            "cardinality" : "single",
            "required" : "false",
            "property" : [],
            "display_name" : "Gene/product ID",
            "transform" : [],
            "searchable" : "false",
            "id" : "bioentity"
         },
         {
            "description" : "Column 3.",
            "type" : "string",
            "indexed" : "true",
            "cardinality" : "single",
            "required" : "false",
            "display_name" : "Gene/product label",
            "property" : [],
            "searchable" : "true",
            "transform" : [],
            "id" : "bioentity_label"
         },
         {
            "transform" : [],
            "searchable" : "false",
            "display_name" : "Annotation class",
            "property" : [],
            "id" : "annotation_class",
            "type" : "string",
            "description" : "Column 5.",
            "required" : "false",
            "cardinality" : "single",
            "indexed" : "true"
         },
         {
            "display_name" : "Annotation class label",
            "property" : [],
            "transform" : [],
            "searchable" : "true",
            "id" : "annotation_class_label",
            "type" : "string",
            "description" : "Column 5 + ontology.",
            "cardinality" : "single",
            "indexed" : "true",
            "required" : "false"
         },
         {
            "description" : "All evidence for this term/gene product pair",
            "type" : "string",
            "indexed" : "true",
            "cardinality" : "multi",
            "required" : "false",
            "display_name" : "Evidence type",
            "property" : [],
            "searchable" : "false",
            "transform" : [],
            "id" : "evidence_type_closure"
         },
         {
            "cardinality" : "multi",
            "indexed" : "true",
            "required" : "false",
            "type" : "string",
            "description" : "All column 8s for this term/gene product pair",
            "id" : "evidence_with",
            "property" : [],
            "display_name" : "Evidence with",
            "transform" : [],
            "searchable" : "false"
         },
         {
            "type" : "string",
            "description" : "Column 13: taxon.",
            "cardinality" : "single",
            "indexed" : "true",
            "required" : "false",
            "display_name" : "Taxon",
            "property" : [],
            "transform" : [],
            "searchable" : "false",
            "id" : "taxon"
         },
         {
            "description" : "Derived from C13 + ncbi_taxonomy.obo.",
            "type" : "string",
            "indexed" : "true",
            "cardinality" : "single",
            "required" : "false",
            "property" : [],
            "display_name" : "Taxon",
            "searchable" : "true",
            "transform" : [],
            "id" : "taxon_label"
>>>>>>> issue-124
         },
         {
            "id" : "process_class",
            "indexed" : "true",
            "required" : "false",
            "transform" : [],
<<<<<<< HEAD
            "cardinality" : "single",
            "searchable" : "false",
            "description" : "Process acc/ID.",
            "property" : [],
            "type" : "string",
            "display_name" : "Process"
         },
         {
            "type" : "string",
            "display_name" : "Process",
            "property" : [],
            "indexed" : "true",
            "id" : "process_class_label",
            "description" : "Common process name.",
            "required" : "false",
            "cardinality" : "single",
            "transform" : [],
            "searchable" : "true"
         },
         {
            "property" : [],
            "display_name" : "Process",
=======
            "property" : [],
            "display_name" : "Taxon (IDs)",
            "id" : "taxon_closure",
            "description" : "IDs derived from C13 + ncbi_taxonomy.obo.",
            "type" : "string",
            "required" : "false",
            "cardinality" : "multi",
            "indexed" : "true"
         },
         {
            "id" : "taxon_closure_label",
            "property" : [],
            "display_name" : "Taxon",
            "transform" : [],
            "searchable" : "true",
            "cardinality" : "multi",
            "indexed" : "true",
            "required" : "false",
            "type" : "string",
            "description" : "Labels derived from C13 + ncbi_taxonomy.obo."
         },
         {
            "required" : "false",
            "cardinality" : "single",
            "indexed" : "true",
            "type" : "string",
            "description" : "Family IDs that are associated with this entity.",
            "id" : "panther_family",
            "transform" : [],
            "searchable" : "true",
            "property" : [],
            "display_name" : "Protein family"
         },
         {
            "searchable" : "true",
            "transform" : [],
            "display_name" : "Family",
            "property" : [],
            "id" : "panther_family_label",
            "description" : "Families that are associated with this entity.",
>>>>>>> issue-124
            "type" : "string",
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "single"
         }
      ],
      "result_weights" : "bioentity^4.0 annotation_class^3.0 taxon^2.0",
      "schema_generating" : "true",
      "display_name" : "Advanced",
      "_infile" : "./metadata/ann_ev_agg-config.yaml",
      "_strict" : 0,
      "description" : "A description of annotation evidence aggregate for GOlr and AmiGO.",
      "fields_hash" : {
         "annotation_class" : {
            "transform" : [],
            "searchable" : "false",
<<<<<<< HEAD
            "cardinality" : "multi",
            "required" : "false",
            "description" : "???",
            "id" : "process_class_closure",
            "indexed" : "true"
         },
         {
            "required" : "false",
            "cardinality" : "multi",
            "transform" : [],
            "searchable" : "true",
            "description" : "???",
            "id" : "process_class_closure_label",
            "indexed" : "true",
            "property" : [],
            "type" : "string",
            "display_name" : "Process"
         },
         {
            "indexed" : "true",
            "id" : "location_list",
            "description" : "",
            "cardinality" : "multi",
            "transform" : [],
            "searchable" : "false",
            "required" : "false",
            "display_name" : "Location",
            "type" : "string",
            "property" : []
         },
         {
            "property" : [],
            "type" : "string",
            "display_name" : "Location",
            "id" : "location_list_label",
            "indexed" : "true",
            "required" : "false",
            "cardinality" : "multi",
            "transform" : [],
            "searchable" : "false",
            "description" : ""
         },
         {
            "cardinality" : "multi",
            "searchable" : "false",
            "transform" : [],
            "required" : "false",
            "description" : "",
            "id" : "location_list_closure",
            "indexed" : "true",
            "property" : [],
            "display_name" : "Location",
            "type" : "string"
         },
         {
            "indexed" : "true",
            "id" : "location_list_closure_label",
            "description" : "",
            "cardinality" : "multi",
            "searchable" : "false",
            "transform" : [],
            "required" : "false",
            "display_name" : "Location",
            "type" : "string",
            "property" : []
         },
         {
            "indexed" : "false",
            "id" : "owl_blob_json",
            "description" : "???",
=======
            "display_name" : "Annotation class",
            "property" : [],
            "id" : "annotation_class",
            "type" : "string",
            "description" : "Column 5.",
            "required" : "false",
            "cardinality" : "single",
            "indexed" : "true"
         },
         "id" : {
            "property" : [],
            "display_name" : "Acc",
            "transform" : [],
            "searchable" : "false",
            "id" : "id",
            "type" : "string",
            "description" : "Gene/product ID.",
            "indexed" : "true",
            "cardinality" : "single",
            "required" : "false"
         },
         "taxon_closure_label" : {
            "id" : "taxon_closure_label",
            "property" : [],
            "display_name" : "Taxon",
            "transform" : [],
            "searchable" : "true",
            "cardinality" : "multi",
            "indexed" : "true",
            "required" : "false",
            "type" : "string",
            "description" : "Labels derived from C13 + ncbi_taxonomy.obo."
         },
         "panther_family_label" : {
            "searchable" : "true",
            "transform" : [],
            "display_name" : "Family",
            "property" : [],
            "id" : "panther_family_label",
            "description" : "Families that are associated with this entity.",
            "type" : "string",
            "required" : "false",
            "indexed" : "true",
            "cardinality" : "single"
         },
         "annotation_class_label" : {
            "display_name" : "Annotation class label",
            "property" : [],
            "transform" : [],
            "searchable" : "true",
            "id" : "annotation_class_label",
            "type" : "string",
            "description" : "Column 5 + ontology.",
            "cardinality" : "single",
            "indexed" : "true",
            "required" : "false"
         },
         "taxon_closure" : {
            "searchable" : "false",
            "transform" : [],
            "property" : [],
            "display_name" : "Taxon (IDs)",
            "id" : "taxon_closure",
            "description" : "IDs derived from C13 + ncbi_taxonomy.obo.",
            "type" : "string",
            "required" : "false",
            "cardinality" : "multi",
            "indexed" : "true"
         },
         "bioentity_label" : {
            "description" : "Column 3.",
            "type" : "string",
            "indexed" : "true",
            "cardinality" : "single",
            "required" : "false",
            "display_name" : "Gene/product label",
            "property" : [],
            "searchable" : "true",
            "transform" : [],
            "id" : "bioentity_label"
         },
         "evidence_with" : {
            "cardinality" : "multi",
            "indexed" : "true",
            "required" : "false",
            "type" : "string",
            "description" : "All column 8s for this term/gene product pair",
            "id" : "evidence_with",
            "property" : [],
            "display_name" : "Evidence with",
            "transform" : [],
            "searchable" : "false"
         },
         "evidence_type_closure" : {
            "description" : "All evidence for this term/gene product pair",
            "type" : "string",
            "indexed" : "true",
            "cardinality" : "multi",
            "required" : "false",
            "display_name" : "Evidence type",
            "property" : [],
            "searchable" : "false",
            "transform" : [],
            "id" : "evidence_type_closure"
         },
         "bioentity" : {
            "type" : "string",
            "description" : "Column 1 + columns 2.",
            "indexed" : "true",
            "cardinality" : "single",
>>>>>>> issue-124
            "required" : "false",
            "property" : [],
            "display_name" : "Gene/product ID",
            "transform" : [],
<<<<<<< HEAD
            "cardinality" : "single",
            "searchable" : "false",
            "type" : "string",
            "display_name" : "???",
            "property" : []
         },
         {
            "id" : "topology_graph_json",
            "indexed" : "false",
            "searchable" : "false",
            "cardinality" : "single",
=======
            "searchable" : "false",
            "id" : "bioentity"
         },
         "taxon_label" : {
            "description" : "Derived from C13 + ncbi_taxonomy.obo.",
            "type" : "string",
            "indexed" : "true",
            "cardinality" : "single",
            "required" : "false",
            "property" : [],
            "display_name" : "Taxon",
            "searchable" : "true",
>>>>>>> issue-124
            "transform" : [],
            "id" : "taxon_label"
         },
         "panther_family" : {
            "required" : "false",
<<<<<<< HEAD
            "description" : "JSON blob form of the local stepwise topology graph.",
            "property" : [],
            "display_name" : "Topology graph (JSON)",
            "type" : "string"
         }
      ]
=======
            "cardinality" : "single",
            "indexed" : "true",
            "type" : "string",
            "description" : "Family IDs that are associated with this entity.",
            "id" : "panther_family",
            "transform" : [],
            "searchable" : "true",
            "property" : [],
            "display_name" : "Protein family"
         },
         "taxon" : {
            "type" : "string",
            "description" : "Column 13: taxon.",
            "cardinality" : "single",
            "indexed" : "true",
            "required" : "false",
            "display_name" : "Taxon",
            "property" : [],
            "transform" : [],
            "searchable" : "false",
            "id" : "taxon"
         }
      },
      "_outfile" : "./metadata/ann_ev_agg-config.yaml"
>>>>>>> issue-124
   }
};
