#!/usr/bin/perl -w
####
#### TODO: ...
####

package AmiGO::WebApp::HTMLClient::Dispatch;
use base 'CGI::Application::Dispatch';


# ## TODO: Think of a way around this preamble.
# ## Actually, making a perl package might be the best way...
#BEGIN { require "config.pl"; }
#use lib $ENV{AMIGO_ROOT} . '/perl/lib';

# ## Old URL parameter system.
# use AmiGO::WebApp::HTMLClient;
# my $amigo = AmiGO::WebApp::HTMLClient->new(PARAMS => {});
# $amigo->run();

#use AmiGO::WebApp::HTMLClient;
#use CGI::Application::Dispatch;

my $app = 'AmiGO::WebApp::HTMLClient';
my $dispatch_table =
    [
     ##
     ## Applications (page taken as-is).
     ##
     ''                    => { app => $app }, # defaults to landing
     '/'                   => { app => $app }, # defaults to landing
     'landing'             => { app => $app, rm => 'landing' },
     'software_list'       => { app => $app, rm => 'software_list' },
     'schema_details'      => { app => $app, rm => 'schema_details' },
     'load_details'        => { app => $app, rm => 'load_details' },
     'browse'              => { app => $app, rm => 'browse' },
     'free_browse'              => { app => $app, rm => 'free_browse' },
     ##
     ## Soft applications (may take some parameters, browser-only).
     ##
     'medial_search'       => { app => $app, rm => 'medial_search' },
     'simple_search'       => { app => $app, rm => 'simple_search' },
     'bulk_search/:personality' => { app => $app, rm => 'bulk_search',
				     personality => 'personality' },
     'bulk_search' => { app => $app, rm => 'bulk_search'},
     'search/:personality' => { app => $app, rm => 'specific_search',
				personality => 'personality' },
     'search'              => { app => $app, rm => 'search' },
     'phylo_graph/:family' =>
     { app => $app, rm => 'phylo_graph', family => 'family' },
     'phylo_graph'         => { app => $app, rm => 'phylo_graph' },
     ##
     ## RESTy (can be consumed as service).
     ##
     'term/:term/:format?'       => { app => $app, rm => 'term',
				      'term' => 'term', 'format' => 'format' },
     'gene_product/:gp/:format?' => { app => $app, rm => 'gene_product',
				      'gp' => 'gp', 'format' => 'format' },
     'visualize'                 => { app => $app, rm => 'visualize' },
     ## Beta.
     'complex_annotation/:complex_annotation'  =>
     { app => $app, rm => 'complex_annotation',
       complex_annotation => 'complex_annotation' },
     'visualize_freeform'  => { app => $app, rm => 'visualize_freeform' },
    ];

sub dispatch_args {
    return {
	#prefix  => 'AmiGO::WebApp::HTMLClient',
	table   => $dispatch_table,
	args_to_new => {
	    # PARAMS => {
	    #     foo => 'bar',
	    #     baz => 'bam',
	},
    }
};


1;

# ## Remember: even though we use "mode" as our runmode, it still must
# ## be declared here as "rm".
# CGI::Application::Dispatch->dispatch(
#     #debug => 1,
#     debug => 0,
#     table => $dispatch_table,
#     );