using Codesaurs.Repositories.Abstraction;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using WebApplication4.DB;
using WebApplication4.Repositories.Abstractions;
using WebApplication4.Repositories.Concretes;
using WebApplication4.Services.Abstractions;
using WebApplication4.Services.Concretes;

namespace WebApplication4;

public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();
            services.AddDbContext<CodesaurusDbContext>(
                options => { options.UseNpgsql(Configuration.GetConnectionString("DefaultConnection")); });
            services.AddScoped<IStudentService, StudentService>();
            services.AddScoped<IStudentRepository, StudentRepository>();
            services.AddScoped<IStudentCourseService, StudentCourseService>();
            services.AddScoped<IStudentCourseRepository, StudentCourseRepository>();
            services.AddScoped<ICourseService, CourseService>();
            services.AddScoped<ICourseRepository, CourseRepository>();

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Your API Name", Version = "v1" });
            });

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_3_0);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c =>
                {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Your API Name v1");
                    c.RoutePrefix = string.Empty;
                });
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }