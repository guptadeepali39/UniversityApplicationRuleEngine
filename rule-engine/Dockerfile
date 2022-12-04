FROM redhat/ubi8:latest
ENV TZ="Asia/Kolkata"
RUN mkdir -p /home/application
RUN mkdir -p /home/application/RuleEngineConfig
RUN yum install net-tools unzip cronie java-1.8.0-openjdk-devel -y
COPY /rule-engine/target/rule-engine-0.0.1-SNAPSHOT.jar /home/application
EXPOSE 8082
CMD ["java", "-jar", "/home/application/rule-engine-0.0.1-SNAPSHOT.jar"] 	